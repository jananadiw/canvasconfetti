import { NextRequest, NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { s3Client } from '@/lib/s3Client';

export async function GET(request: NextRequest, { params }: { params: { key: string } }) {
  const { key } = params;

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
      Key: key,
    });

    const { Body, ContentType } = await s3Client.send(command);

    if (!(Body instanceof Readable)) {
      throw new Error('Invalid stream');
    }

    const response = new NextResponse(Body as ReadableStream);

    response.headers.set('Content-Type', ContentType || 'image/jpeg');
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    return response;
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}