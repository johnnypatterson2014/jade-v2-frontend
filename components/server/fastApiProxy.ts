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
