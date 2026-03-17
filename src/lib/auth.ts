const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'fostral2026';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'change-this-secret-in-production';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export function validateCredentials(username: string, password: string): boolean {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export async function createSessionToken(): Promise<string> {
  const expiry = Date.now() + SESSION_DURATION_MS;
  const payload = `fostral-cms:${expiry}`;
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(ADMIN_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return `${expiry}.${hex}`;
}

export async function verifySessionToken(token: string): Promise<boolean> {
  try {
    const [expiryStr, hex] = token.split('.');
    const expiry = parseInt(expiryStr, 10);
    if (isNaN(expiry) || Date.now() > expiry) return false;

    const payload = `fostral-cms:${expiry}`;
    const encoder = new TextEncoder();

    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(ADMIN_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    );

    const sigBytes = new Uint8Array(
      hex.match(/.{2}/g)!.map((b) => parseInt(b, 16)),
    );

    return await crypto.subtle.verify('HMAC', key, sigBytes, encoder.encode(payload));
  } catch {
    return false;
  }
}
