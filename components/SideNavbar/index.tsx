import Link from 'next/link';
import { navigationLinks } from '@/lib/constants';

export const SideNavbarComponent = () => {
  return (
    <div className='flex flex-col h-screen bg-surface-100-800-token min-w-[128px] overflow-y-auto scrollbar'>
      <div className='flex flex-col items-center justify-center gap-5 mb-10'>
        <div className='flex justify-center flex-wrap sticky top-0 bg-surface-100-800-token pt-8'>
          <p className='text-2xl font-bold'>Shadcn</p>
          <div className='text-2xl font-bold'>Components</div>
        </div>

        {/*  shadcn components */}
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
          >
            <p className='text-xl text-black dark:text-white hover:text-muted-foreground dark:hover:text-black'>
              {link.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
