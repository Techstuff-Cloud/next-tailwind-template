import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Page from '@/components/ComponentWrapper';

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Page(AvatarComponent);
