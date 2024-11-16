import PostModel from "../models/post.js"
import fs from 'fs'
import path from 'path'



const Create = async(req , res)=>{
    try{

const {title , desc} = req.body


 //yeh image upload ke liye
 const imagePath = req.file.filename


const CreateBlog = new PostModel({
    title,
    desc,
    image:imagePath
})
await CreateBlog.save()
return res.status(200).json({success:true , message:"Post Created successfully" , post:CreateBlog

})
// res.send("hello from blogs")
    }catch(error){
console.log(error);
return res.status(404).json({success: false, message:"Internal server error"})
    }
}


const deletePost = async(req , res)=>{
    try{
const postId = req.params.id
const FindPost = await PostModel.findById(postId)
if(!FindPost){
    return res.status(404).json({success: false, message:"Post not found"})
}

//image delete karne ke liye
if(FindPost.image){
    const profilepath = path.join('public/images', FindPost.image)
    fs.promises.unlink(profilepath)
    .then(()=> console.log('post image deleted '))
    .catch(error => console.log("error" , error) )
}
const deletedPost = await PostModel.findByIdAndDelete(postId)
return res.status(200).json({success: true, message:"post deleted successfully" , post:deletedPost})
    }
    catch(error){
        return res.status(500).json({success: false, message:"Internal server error"})
    }
}







// to get the posts

const getposts = async(req , res)=>{
    try{

const posts = await PostModel.find()
if(!posts){
    return res.status(404).json({success:false , message:"Post Not Found"})
}



return res.status(200).json({success:true , posts}) 

    }
    catch(error){
        return res.status(200).json({success: false, message:"Internal server error"})
    }
}





//update ke liye

const update = async(req , res)=>{
    try{

const {title , desc} = req.body
const postId = req.params.id;

const postUpdate = await PostModel.findById(postId)
if(!postUpdate){
    return res.status(404).json({success: false , message:"Post not found"})
}

if(title){
    postUpdate.title = title
}

if(desc){
    postUpdate.desc = desc
}
// yahan req.file ;liye that's means ki agar koi file aa rhi heh post meh aur usko change karna heh toh
if(req.file){
    postUpdate.image = req.file.filename
}

await postUpdate.save()
return res.status(200).json({success: true, message:"post updated successfully" , post:postUpdate})

    }
    catch(error){
        console.log(error);
        return res.status(200).json({success: false, message:"Internal server error"})
    
    }
}



export {Create , deletePost ,getposts , update}