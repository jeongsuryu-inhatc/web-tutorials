import { S3Client, CreateBucketCommand, PutObjectCommand, } from '@aws-sdk/client-s3';

export async function main() {
	const s3Client = new S3Client({});

	const bucketName = 'jeongsuryu-portfolio';

	await s3Client.send(
		new PutObjectCommand({
			Bucket: bucketName,
			Key: 'hello3.txt',
			Body: 'Hello3, Javascript SDK!',
		})
	);
	console.log(`Uploaded hello3.txt to s3://${bucketName}`);
}

main();
			
