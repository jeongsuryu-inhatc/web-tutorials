import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export async function main() {
	const s3Client = new S3Client({});

	const bucketName = 'jeongsuryu-portfolio';

	const response = await s3Client.send(
		new ListObjectsV2Command({
			Bucket: bucketName,
		})
	);

	const objects = response.Contents ?? [];
	if (objects.length === 0) {
		console.log(`No objects in s3://${bucketName}`);
		return;
	}

	console.log(`Objects in s3://${bucketName}:`);
	for (const object of objects) {
		console.log(`- ${object.Key} (${object.Size} bytes, ${object.LastModified})`);
	}
}

main();
