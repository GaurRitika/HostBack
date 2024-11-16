import PostModel from "../models/post.js"
import CommentModel from "../models/comments.js"

const AddComment = async(req , res)=>{
    try{
const {postId , userId , comment} = req.body
const newComment = new CommentModel({
    postId , userId, comment
})

await newComment.save()

const existpost = await PostModel.findById(postId)
if(!existpost){
    return res.status(404).json({success:false,message:"blog post not found"})
}

existpost.comments.push(newComment._id)
await existpost.save()
res.status(200).json({success:true , messages:'comments added successfully' , comment:newComment})
    }
    catch(error){
console.log(error)
    }
}


// comments meh toh comments aa rha heh , lekin post meh comment commentid se aa rha heh , ushi ke liye public fiolder bna fhe 
export default AddComment