import express from 'express';
import multer from 'multer';
import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const app = express();
const port = 3000;

const s3Client = new S3Client({});
const bucketName = 'jeongsuryu-portfolio';

const upload = multer({ storage: multer.memoryStorage() });

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
	const response = await s3Client.send(
		new ListObjectsV2Command({
			Bucket: bucketName,
		})
	);
	const files = (response.Contents ?? []).map((object) => ({
		key: object.Key,
		size: object.Size,
		lastModified: object.LastModified,
	}));

	res.render('index', {
		bucketName,
		files,
		message: req.query.message ?? null,
	});
});

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];

function isImage(key) {
	const lowerKey = key.toLowerCase();
	return imageExtensions.some((ext) => lowerKey.endsWith(ext));
}

app.get('/filelist', async (req, res) => {
	const response = await s3Client.send(
		new ListObjectsV2Command({
			Bucket: bucketName,
		})
	);
	const objects = response.Contents ?? [];

	const images = [];
	const others = [];
	for (const object of objects) {
		if (isImage(object.Key)) {
			const url = await getSignedUrl(
				s3Client,
				new GetObjectCommand({ Bucket: bucketName, Key: object.Key }),
				{ expiresIn: 3600 }
			);
			images.push({ key: object.Key, url });
		} else {
			others.push({ key: object.Key });
		}
	}

	res.render('filelist', { bucketName, images, others });
});

app.post('/upload', upload.single('file'), async (req, res) => {
	if (!req.file) {
		return res.redirect('/?message=' + encodeURIComponent('파일을 선택해 주세요.'));
	}

	const key = Buffer.from(req.file.originalname, 'latin1').toString('utf8');

	await s3Client.send(
		new PutObjectCommand({
			Bucket: bucketName,
			Key: key,
			Body: req.file.buffer,
			ContentType: req.file.mimetype,
		})
	);

	res.redirect('/?message=' + encodeURIComponent(`${key} 업로드 완료!`));
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
