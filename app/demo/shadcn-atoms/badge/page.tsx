import { Badge } from '@/components/ui/badge';
import Page from '@/components/ComponentWrapper';

const BadgeDemo = () => {
  return (
    <div className='flex gap-x-6'>
      <Badge>Badge</Badge>
      <Badge variant='destructive'>Badge</Badge>
      <Badge variant='secondary'>Badge</Badge>
      <Badge variant='outline'>Badge</Badge>
    </div>
  );
};

export default Page(BadgeDemo);
