import express from "express"
import AddComment from "../controllers/comments.js"
// import { isLogin } from "../middleware/isLogin.js"
const CommentsRoutes = express.Router()


// create route
CommentsRoutes.post('/addcomment' , AddComment)

// abh comment har user toh kar nhi sakta wahi user karega joh login hoga , 
// iske liye middleware meh jaao , isAdmin waale meh last meh
export default CommentsRoutes