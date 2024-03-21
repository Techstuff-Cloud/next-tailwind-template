import { cookies } from 'next/headers';

export async function POST(req: Request, res: Response) {
  // Store token in cookies to check authentication in middleware
  cookies().set('token', 'random token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'Signed-in successfully' }));
}
