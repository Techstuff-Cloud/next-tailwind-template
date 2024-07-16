'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    try {
      event.preventDefault();
      setIsLoading(true);

      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        router.push('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log('Failed to login:', error);
      setError('An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div
      className={cn('grid gap-6', className)}
      {...props}
    >
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label>Email</Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='grid gap-1'>
            <Label>Password</Label>
            <Input
              id='password'
              type='password'
              disabled={isLoading}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='my-4 text-red-500'>{error}</div>
          <button
            type='submit'
            disabled={isLoading}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <Button
        variant='outline'
        type='button'
        disabled={isLoading}
      >
        {/* {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '} */}
        GitHub
      </Button>
    </div>
  );
}
