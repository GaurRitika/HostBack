import express from 'express'

 import { uploadImage} from '../controllers/image.js'
import upload from '../middleware/Multer.js'


const ImageRoutes = express.Router()


ImageRoutes.post('/upload', upload.single('image') , uploadImage)

export default ImageRoutes