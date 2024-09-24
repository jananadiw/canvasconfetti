import { NextResponse } from 'next/server';
import { ListObjectsCommand } from '@aws-sdk/client-s3';
import { s3Client } from '@/lib/s3Client';

export async function GET() {
  try {
    const command = new ListObjectsCommand({
      Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET,
    });

    const data = await s3Client.send(command);
    const images = data.Contents?.map(item => item.Key) || [];

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}