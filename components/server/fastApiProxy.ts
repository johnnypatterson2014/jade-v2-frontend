'use server';

import { NextResponse, NextRequest } from 'next/server';

export const getTestResponse = async () => {

  const url = 'http://127.0.0.1:8000';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    // res.status(200).json({ data })
    return NextResponse.json(data);
  } catch (error) {
    // TODO - log error
  }
}

export const getGraph = async () => {

  const url = 'http://127.0.0.1:8000/plot';

  try {
    const response = await fetch(url, {
      method: 'GET',
    })
    // const data = await response.json()
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/png';
    // res.status(200).json({ data })
    // return NextResponse.json(data);
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        // Optional: set a cache control header
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    // TODO - log error
  }
}

const SEARCH_BASE = 'http://127.0.0.1:8000';

export const startSearch = async (body: unknown) => {
  const response = await fetch(`${SEARCH_BASE}/search/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  const text = await response.text();
  if (!response.ok) {
    return new NextResponse(text, { status: response.status });
  }
  return new NextResponse(text, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const stepSearch = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/search/step/${encodeURIComponent(sessionId)}`, {
    method: 'POST',
  });
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

export const runSearchToEnd = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/search/run_to_end/${encodeURIComponent(sessionId)}`, {
    method: 'POST',
  });
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

export const cancelSearch = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/search/cancel/${encodeURIComponent(sessionId)}`, {
    method: 'DELETE',
  });
  return new NextResponse(null, { status: response.status });
};

export const startMdp = async (body: unknown) => {
  const response = await fetch(`${SEARCH_BASE}/mdp/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  const text = await response.text();
  if (!response.ok) {
    return new NextResponse(text, { status: response.status });
  }
  return new NextResponse(text, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const stepMdp = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/mdp/step/${encodeURIComponent(sessionId)}`, {
    method: 'POST',
  });
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

export const runMdpToEnd = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/mdp/run_to_end/${encodeURIComponent(sessionId)}`, {
    method: 'POST',
  });
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

export const cancelMdp = async (sessionId: string) => {
  const response = await fetch(`${SEARCH_BASE}/mdp/cancel/${encodeURIComponent(sessionId)}`, {
    method: 'DELETE',
  });
  return new NextResponse(null, { status: response.status });
};
