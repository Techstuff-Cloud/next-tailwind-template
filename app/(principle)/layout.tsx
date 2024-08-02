import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function PrincipleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>PrincipleLayout</div>

      <nav>
        <Link href={'/principle/student'}>
          <Button
            size='sm'
            variant='link'
          >
            View Students
          </Button>
        </Link>

        <Link href={'/principle/teacher'}>
          <Button
            size='sm'
            variant='link'
          >
            View Teachers
          </Button>
        </Link>

        <Link href={'/principle/setting'}>
          <Button
            size='sm'
            variant='link'
          >
            View Setting
          </Button>
        </Link>
      </nav>

      {children}
    </>
  );
}
