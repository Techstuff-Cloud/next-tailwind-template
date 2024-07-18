import { decodeJwt } from 'jose';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/admin', '/teacher', '/principle', '/management'];

const perms = {
  '/admin/setting': ['admin.setting.edit', 'admin.setting.view'],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value;
  let userInfo = null;

  if (token) {
    userInfo = decodeJwt(token);
  }

  if (token && pathname.startsWith('/login')) {
    return Response.redirect(new URL('/', request.url));
  }

  if (token && pathname === '/') {
    const haveMultipleRoles = userInfo?.roles.length > 1;
    return Response.redirect(
      new URL(haveMultipleRoles ? '/select-role' : `/${userInfo?.roles?.[0]?.toLowerCase()}`, request.url)
    );
  }

  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute) {
    if (!token) {
      return Response.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
