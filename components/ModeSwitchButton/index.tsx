'use client';

import * as React from 'react';
import ThemeContext from '@/_context/ThemeContext';
import { Button } from '@/components/ui/button';

export function ModeSwitchButton() {
  const { toggleColorMode, mode } = React.useContext(ThemeContext);

  return (
    <Button onClick={toggleColorMode} color='inherit'>
      {mode === 'dark' ? <p>Dark</p> : <p>Light</p>}
    </Button>
  );
}
