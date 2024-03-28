import { cookies } from 'next/headers';

export async function POST(req: Request, res: Response) {
  cookies().delete('token');

  return new Response(JSON.stringify({ message: 'Logged-out successfully' }));
}
