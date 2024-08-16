import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const response = NextResponse.json({ message: 'Logged-out successfully' });

  response.cookies.delete({
    name: 'token',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
