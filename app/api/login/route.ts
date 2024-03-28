import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

export async function POST(req: Request, res: NextApiResponse) {
  // Store token in cookies to check authentication in middleware
  const token = await req.json();
  cookies().set('token', token);

  return new Response(JSON.stringify({ message: 'Signed-in successfully' }));
}
