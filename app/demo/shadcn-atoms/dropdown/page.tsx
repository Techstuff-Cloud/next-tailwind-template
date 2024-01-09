'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { themeList } from '@/themes/themeList';
import ThemeContext from '@/_context/ThemeContext';
import { useContext } from 'react';

const DropdownMenuComponent = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className='text-muted-foreground'>Themes</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(themeList).map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(themeList[theme])}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
