import PostModel from "../models/post.js"

const GetSinglepost = async(req , res)=>{
    try{
const postId = req.params.id
const FindPost = await PostModel.findById(postId)
//populate ka use karenge data laane ke liye
.populate({
    path:"comments", // mongo ke database meh yehi likha heh
    populate:{
        path:"userId"
    }
})

if(!FindPost){
    return res.status(404).json({success:false , message:"Blog post not found"})
}

res.status(200).json({success:true,Post:FindPost})
    }catch(error){

    }
}

export {GetSinglepost}