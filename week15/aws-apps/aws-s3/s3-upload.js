import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';

export async function main(filename) {
	if (!filename) {
		console.error('Usage: node s3-upload.js <filename>');
		process.exit(1);
	}

	const s3Client = new S3Client({});

	const bucketName = 'jeongsuryu-portfolio';
	const key = basename(filename);

	const body = await readFile(filename);

	await s3Client.send(
		new PutObjectCommand({
			Bucket: bucketName,
			Key: key,
			Body: body,
		})
	);
	console.log(`Uploaded ${key} to s3://${bucketName}`);
}

main(process.argv[2]);
