// this is only enabled in production. In development, our error overlay will show instead.
'use client';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <h3>Global Error: {error.digest}</h3>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
