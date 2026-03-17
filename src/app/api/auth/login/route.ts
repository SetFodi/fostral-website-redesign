import { NextRequest, NextResponse } from 'next/server';
import { validateCredentials, createSessionToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (!validateCredentials(username, password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ success: true });

  response.cookies.set('admin_token', token, {
    path: '/',
    maxAge: 86400,
    sameSite: 'lax',
  });

  return response;
}
