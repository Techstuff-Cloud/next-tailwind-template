// https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-root-layouts
'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong (Root Layout Level)!</h2>
      {/* TODO: Remove error.message as it can be confidential data */}
      <h3>Global Error: {error.message}</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
