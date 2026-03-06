import { NextResponse, NextRequest } from 'next/server';
import { getGraph } from '@/components/server/fastApiProxy'

export async function GET(request: NextRequest) {

    var response = await getGraph();
    return response;

}