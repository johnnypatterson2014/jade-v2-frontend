import { NextRequest } from 'next/server';
import { stepSearch } from '@/components/server/fastApiProxy';

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  return await stepSearch(sessionId);
}
