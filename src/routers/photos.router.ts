import express from 'express';
import { getPhotos, uploadPhoto } from '../controllers/photos.controller';
import { upload } from '../middlewares/multer.middleware';

const router = express.Router();

router.get('/photos/get', getPhotos);

router.post('/photos/upload', upload.single('photo'), uploadPhoto)

export default router;