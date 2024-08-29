import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { NavigationBreadcrumb } from './NavigationBreadcrumb';

interface AppbarProps {
  showSidebar: boolean;
  showToggleButton: boolean;
  onToggleSidebar: () => void;
}

const Appbar = (props: AppbarProps) => {
  const { onToggleSidebar, showSidebar, showToggleButton } = props;

  return (
    <div className='bg-surface-50 h-full flex items-center border-b border-surface-100 z-50'>
      <div className='w-[68px] h-full flex justify-center items-center border-r border-r-surface-100'>
        <Link href='/'>
          <Image
            src='/main-logo.png'
            alt='Omakala logo'
            width={40}
            height={32}
            quality={100}
          />
        </Link>
      </div>

      <div className='relative p-2.5 border-r h-full flex items-center border-r-surface-100'>
        <p className='text-sm font-semibold text-gray-800 max-w-[179px] line-clamp-2 cursor-default'>
          The Shishukunj International School
        </p>

        {showToggleButton && (
          <div className='absolute -right-4 top-[50%] -translate-y-[50%]'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='default'
                  size='icon'
                  className='w-8 h-8 rounded-full'
                  onClick={onToggleSidebar}
                >
                  <ChevronRight
                    size={20}
                    className={`transition-transform ${showSidebar ? 'rotate-180' : 'rotate-0'}`}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className='bg-primary-500 text-gray-50'>
                <p>Toggle Sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </div>

      <div className='flex-1 flex justify-between items-center px-6 py-4'>
        <div>
          <NavigationBreadcrumb />
        </div>

        <div>{/* TODO: Add user profile here */}</div>
      </div>
    </div>
  );
};

Appbar.displayName = 'Appbar';

export default Appbar;
