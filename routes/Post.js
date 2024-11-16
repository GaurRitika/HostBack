import express from "express"
import { Create,deletePost, getposts ,update} from "../controllers/Post.js"
// import { isAdmin } from "../middleware/isAdmin.js"
import upload from "../middleware/Multer.js"


const PostsRoutes = express.Router()




PostsRoutes.post('/create', upload.single('postimage') ,Create)
//isAdmin isiliye liya ki pehle check ho jaaye ki admin heh ki nhi phir blog create karwa lenge
// abh middleware banayenge ki joh blog create kar rha woh admin heh ki user heh , agar user heh error aayega and admin heh toh aageh ke process




// yahan post ki id bhi paas kar do , taaki woh delete kar deh
// isAdmin isiliye because delete bhi kaun kar sakega , only admin
 PostsRoutes.delete('/delete/:id'   , deletePost)



//for getposts
 PostsRoutes.get('/getposts' , getposts)




//for updates
// isAdmin isiliye because update bhi kaun kar sakega , only admin
PostsRoutes.patch('/update/:id' , upload.single('postimage') , update)


export default PostsRoutes