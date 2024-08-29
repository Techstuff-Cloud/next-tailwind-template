import { convertPathnameToReadableText } from '@/lib/utils/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

export const NavigationBreadcrumb = () => {
  const pathname = usePathname();

  const paths = useMemo(() => pathname.split('/').slice(1), [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href='/'
            className='text-gray-500'
          >
            Dashboard
          </Link>
        </BreadcrumbItem>
        {paths.at(0) !== '' && (
          <>
            <BreadcrumbSeparator className='text-gray-500'>/</BreadcrumbSeparator>

            {paths.length >= 2 && (
              <>
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-1'>
                      <BreadcrumbEllipsis className='h-4 w-6 p-0.5 bg-surface-100' />
                      <span className='sr-only'>Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align='center'
                      className='bg-surface-50'
                    >
                      {paths.slice(0, -1).map((path, index) => (
                        <DropdownMenuItem key={path}>
                          <Link href={`/${paths.slice(0, index + 1).join('/')}`}>
                            {convertPathnameToReadableText(path)}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='text-gray-500'>/</BreadcrumbSeparator>
              </>
            )}

            <BreadcrumbItem>
              <BreadcrumbPage className='text-gray-900 font-medium'>
                {convertPathnameToReadableText(paths.at(-1) as string)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
