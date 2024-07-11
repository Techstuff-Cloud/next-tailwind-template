import { NextResponse } from 'next/server';

const users = [
  {
    email: 'chandresh@test.com',
    password: '123321',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNoYW5kcmVzaCBQYXRpZGFyIiwiZW1haWwiOiJjaGFuZHJlc2hAdGVzdC5jb20iLCJpYXQiOjE1MTYyMzkwMjIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJwZXJtaXNzaW9ucyI6WyIvYWRtaW4iXSwib3JnYW5pemF0aW9ucyI6W3sib3JnX2lkIjoiMTIzMXdlcWVxZTEyMzEzIiwibmFtZSI6IlRlY2hzdHVmZiJ9XSwiYWN0aXZlUGxhbiI6IkVOVEVSUFJJU0UifQ.jOlSF4fNUz3JZ4l_FLiuDFxo5PGf-tCqhb4uMJkwZPw',
  },
];

export async function POST(req: Request, res: Response) {
  // Store token in cookies to check authentication in middleware

  const { email, password } = await req.json();
  const user = users.find((user) => user.email === email && user.password === password);
  let response: NextResponse;

  if (user) {
    response = NextResponse.json({ success: true, message: 'Signed-in successfully' });
    response.cookies.set('token', user.token, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  } else {
    response = NextResponse.json({ success: false, message: 'Invalid credentials' });
    response.cookies.delete('token');
  }

  return response;
}
