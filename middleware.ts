import { decodeJwt } from "jose";
import type { NextRequest } from "next/server";
import { PERMISSIONS } from "./lib/constants/permissions";

const protectedRoutes = [
  "/admin",
  "/teacher",
  "/principle",
  "/management",
  "/select-role",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  let userInfo = null;

  if (token) {
    userInfo = decodeJwt(token);
  }

  if (token && pathname.startsWith("/login")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (token && pathname === "/") {
    const haveMultipleRoles = userInfo?.roles.length > 1;
    return Response.redirect(
      new URL(
        haveMultipleRoles
          ? "/select-role"
          : `/${userInfo?.roles?.[0]?.toLowerCase()}`,
        request.url,
      ),
    );
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isProtectedRoute) {
    if (!token) {
      return Response.redirect(new URL("/login", request.url));
    }

    if (PERMISSIONS[pathname]) {
      const viewPermissionKey = PERMISSIONS[pathname].find((perm) =>
        perm.endsWith(".view"),
      );

      // check if user has view permission
      if (
        !viewPermissionKey ||
        !userInfo?.claims?.includes(viewPermissionKey)
      ) {
        return Response.redirect(new URL("/not-allowed", request.url));
      }
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
