import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Page from '@/components/ComponentWrapper';

const LabelComponent = () => {
  return (
    <div>
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>
    </div>
  );
};

export default Page(LabelComponent);
