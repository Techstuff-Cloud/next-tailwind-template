import { decodeJwt } from 'jose';
import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get('token')?.value;
  const userInfo = token ? decodeJwt(token) : undefined;

  return Response.json({ userInfo });
}
