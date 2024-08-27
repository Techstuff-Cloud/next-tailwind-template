import Image from 'next/image';
import Link from 'next/link';

const Appbar = () => {
  return (
    <div className='bg-transparent h-full flex items-center border-b border-surface-100'>
      <div className='w-[68px] h-full flex justify-center items-center border-r border-r-surface-100'>
        <Link href='/'>
          <Image
            src='/main-logo.png'
            alt='Omakala logo'
            width={40}
            height={32}
            quality={100}
          />
        </Link>
      </div>

      <div className='p-2.5 border-r h-full flex items-center border-r-surface-100'>
        <p className='text-sm font-semibold text-gray-800 max-w-[179px] line-clamp-2 cursor-default'>
          The Shishukunj International School
        </p>
      </div>
    </div>
  );
};

Appbar.displayName = 'Appbar';

export default Appbar;
