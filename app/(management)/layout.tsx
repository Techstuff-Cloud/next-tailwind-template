import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>ManagementLayout</div>

      <nav>
        <Link href={'/management/principle'}>
          <Button
            size='sm'
            variant='link'
          >
            View Principles
          </Button>
        </Link>

        <Link href={'/management/student'}>
          <Button
            size='sm'
            variant='link'
          >
            View Students
          </Button>
        </Link>
      </nav>

      {children}
    </>
  );
}
