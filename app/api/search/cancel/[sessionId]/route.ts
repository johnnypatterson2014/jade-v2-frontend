import { NextRequest } from 'next/server';
import { cancelSearch } from '@/components/server/fastApiProxy';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  return await cancelSearch(sessionId);
}
