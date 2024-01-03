import { Button } from '@/components/ui/button';

export const ButtonComponent = () => {
  return (
    <>
      <Button>primary</Button>

      <Button variant='secondary'>Secondary</Button>

      <Button variant='destructive'>destructive/error</Button>

      <Button variant='outline'>outline</Button>

      <Button variant='ghost'>ghost</Button>

      <Button className='bg-tertiary'>tertiary</Button>

      <Button className='bg-warning'>warning</Button>

      <Button className='bg-success'>success</Button>
    </>
  );
};
