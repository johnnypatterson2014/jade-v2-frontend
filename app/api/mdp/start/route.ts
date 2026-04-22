import { NextRequest } from 'next/server';
import { startMdp } from '@/components/server/fastApiProxy';

export async function POST(request: NextRequest) {
  let body: unknown = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  return await startMdp(body);
}
