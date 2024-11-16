import express from "express"
import { GetSinglepost } from "../controllers/Particularpost.js"
const PublicRoutes = express.Router()
PublicRoutes.get('/singlepost/:id' , GetSinglepost)
export default PublicRoutes