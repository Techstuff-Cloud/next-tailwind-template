'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ThemeContext } from '@/lib/stores/theme';
import { useContext } from 'react';

const DropdownMenuComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className='font-medium'>Themes</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* {Object.keys(themeList).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(themeList[theme])}
          >
            {theme}
          </DropdownMenuItem>
        ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
