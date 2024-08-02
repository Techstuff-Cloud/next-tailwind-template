import { SettingContext } from '@/_context/ThemeContext';
import WrapperComponent from '@/app/demo/shadcn-atoms/WrapperComponent';
import { Toaster } from '@/components/ui/toaster';
import * as React from 'react';
import './globals.css';
import { UserContextProvider, UserWrapper } from '@/lib/stores/users';
import { cookies } from 'next/headers';
import { decodeJwt } from 'jose';
import { initialUserState, UserState } from '@/lib/stores/users/Context';

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
  const userInfo = (token ? decodeJwt(token) : {}) as UserState;

  return (
    <SettingContext>
      <UserContextProvider>
        <WrapperComponent>
          <UserWrapper
            token={token}
            origanizations={orgs}
            claims={userInfo.claims}
            roles={userInfo.roles}
            activeSubscription={''}
          />
          {children}
          <Toaster />
        </WrapperComponent>
      </UserContextProvider>
    </SettingContext>
  );
}
