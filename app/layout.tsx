import RootLayoutWrapper from "@/components/RootLayoutWrapper.tsx";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/lib/stores/theme";
import { UserContextProvider, UserWrapper } from "@/lib/stores/users";
import { UserState } from "@/lib/stores/users/Context";
import { decodeJwt } from "jose";
import { Metadata } from "next";
import { cookies } from "next/headers";
import * as React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omkala School", // TODO: Change title dynamically
  description: "Omkala School",
};

const orgs = [
  {
    userId: "1",
    name: "Techstuff",
    orgId: "tech_01",
  },
];

const fetchOrganizations = async (userId: string) => {
  try {
    // TODO: Use external API here to fetch organizations
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const orgsData = orgs.filter((org) => org.userId === userId);
        resolve(orgsData);
      }, 1000);
    });
  } catch (error) {
    console.log("Error fetching organizations:", error);
    // throw error;
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token")?.value;
  const orgs = (await fetchOrganizations("1")) as any[];
  const userInfo = (token ? decodeJwt(token) : {}) as UserState;
  const a = "";

  return (
    <ThemeProvider>
      <UserContextProvider>
        <RootLayoutWrapper>
          <UserWrapper
            token={token}
            organizations={orgs}
            claims={userInfo.claims}
            roles={userInfo.roles}
            activeSubscription={""}
          />
          {children}
          <Toaster />
        </RootLayoutWrapper>
      </UserContextProvider>
    </ThemeProvider>
  );
}
