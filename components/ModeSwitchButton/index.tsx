'use client';

import { Button } from '@/components/ui/button';
import { ThemeContext } from '@/lib/stores/theme';
import * as React from 'react';

export function ModeSwitchButton() {
  const { toggleColorMode, mode } = React.useContext(ThemeContext);

  return (
    <Button
      onClick={toggleColorMode}
      color='inherit'
    >
      {mode === 'dark' ? <p>Dark</p> : <p>Light</p>}
    </Button>
  );
}
