import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3';

export async function main(filename) {
	if (!filename) {
		console.error('Usage: node s3-delete.js <filename>');
		process.exit(1);
	}

	const s3Client = new S3Client({});

	const bucketName = 'jeongsuryu-portfolio';

	await s3Client.send(
		new DeleteObjectCommand({
			Bucket: bucketName,
			Key: filename,
		})
	);
	console.log(`Deleted ${filename} from s3://${bucketName}`);
}

main(process.argv[2]);
