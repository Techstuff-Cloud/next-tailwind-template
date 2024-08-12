import { NextResponse } from 'next/server';

const users = [
  {
    email: 'chandresh@test.com',
    password: '123321',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNoYW5kcmVzaCBQYXRpZGFyIiwiZW1haWwiOiJjaGFuZHJlc2hAdGVzdC5jb20iLCJpZCI6IjEiLCJpYXQiOjE1MTYyMzkwMjIsInJvbGVzIjpbIlBSSU5DSVBMRSIsIk1BTkFHRU1FTlRfU1RBRkYiXSwiY2xhaW1zIjpbInByaW5jaXBsZS5zZXR0aW5nLmVkaXQiLCJwcmluY2lwbGUuc2V0dGluZy52aWV3IiwicHJpbmNpcGxlLnN0dWRlbnQudmlldyIsInByaW5jaXBsZS50ZWFjaGVyLnZpZXciLCJwcmluY2lwbGUudGVhY2hlci5hZGQiLCJtYW5hZ2VtZW50LnByaW5jaXBsZS52aWV3IiwibWFuYWdlbWVudC5wcmluY2lwbGUuZWRpdCIsIm1hbmFnZW1lbnQuc3R1ZGVudC52aWV3IiwibWFuYWdlbWVudC5zdHVkZW50LmFkZCJdLCJhY3RpdmVQbGFuIjoiRU5URVJQUklTRSJ9.TmfcSP8aW7Ej4YijA9YgYdOXx1bT1nCJtr_FIJFEkP4',
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
