// @flow
import * as React from 'react';
import { CardComponent } from '@/components/demo/Card';
import { ButtonComponent } from '@/components/demo/Button';

type Props = {};
const DemoPage = (props: Props) => {
  return (
    <div className='flex items-center flex-col my-12 gap-20'>
      <CardComponent />
      <ButtonComponent />
    </div>
  );
};

export default DemoPage;
