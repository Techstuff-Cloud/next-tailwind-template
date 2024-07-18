import { SettingContext } from '@/_context/ThemeContext';
import WrapperComponent from '@/app/demo/shadcn-atoms/WrapperComponent';
import { Toaster } from '@/components/ui/toaster';
import * as React from 'react';
import './globals.css';
import { UserContextProvider, UserWrapper } from '@/lib/stores/users';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';

const orgs = [
  {
    userId: '1',
    name: 'Techstuff',
    orgId: 'tech_01',
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
    console.log('Error fetching organizations:', error);
    // throw error;
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get('token')?.value;
  const orgs = (await fetchOrganizations('1')) as any[];
  const claims = (token ? decodeJwt(token)?.claims : []) as string[];

  return (
    <SettingContext>
      <UserContextProvider>
        <WrapperComponent>
          <UserWrapper
            token={token}
            origanizations={orgs}
            permissions={claims}
            activeSubscription={''}
          />
          {children}
          <Toaster />
        </WrapperComponent>
      </UserContextProvider>
    </SettingContext>
  );
}
