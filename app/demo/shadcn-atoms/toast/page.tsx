'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Page from '@/components/ComponentWrapper';

const ToastComponent = () => {
  const { toast } = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
          });
        }}
      >
        Default Toast
      </Button>{' '}
      <Button
        onClick={() => {
          toast({
            variant: 'destructive',
            description: 'Your message has been sent.',
          });
        }}
      >
        destructive Toast
      </Button>
    </>
  );
};
export default Page(ToastComponent);
