import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-surface-50-900-token">
      <div className="flex flex-col items-center justify-center text-primary-900-50-token">
        <Image src="/next.svg" alt="Next.js Logo" width={200} height={200} />
        <h1 className="h5 mt-8">Next.js</h1>
        <p className="text-xl mt-4">with Tailwind CSS</p>
      </div>
    </main>
  );
}
