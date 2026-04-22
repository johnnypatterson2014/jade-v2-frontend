import { NextRequest } from 'next/server';
import { cancelMdp } from '@/components/server/fastApiProxy';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  return await cancelMdp(sessionId);
}
