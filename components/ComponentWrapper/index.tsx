import {
  ComponentType,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  Ref,
} from 'react';

type ComponentProps = {
  children?: ReactNode;
};

const Page = (Component: ComponentType<ComponentProps>) => {
  const WithPageStyles = (
    props: PropsWithChildren<ComponentProps>,
    ref: Ref<any>
  ) => (
    <div
      ref={ref}
      className='flex flex-grow items-center flex-col pt-20 gap-20 mx-auto min-w-[600px]'
      {...props}
    >
      <Component {...props} />
    </div>
  );

  return forwardRef(WithPageStyles);
};

export default Page;
