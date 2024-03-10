import { S3Client } from '@aws-sdk/client-s3';
// Set the AWS Region.
const REGION = 'ap-northeast-2';
const CREDENTIAL = {
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY || '',
};

// Create an Amazon S3 service client object.
const s3Client = new S3Client([{ region: REGION, credentials: CREDENTIAL }]);

export { s3Client };
