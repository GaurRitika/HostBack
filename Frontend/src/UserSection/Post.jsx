import React ,{useEffect ,useState} from "react";
import {  BaseUrl,get} from '../services/Endpoint'
import { useNavigate } from "react-router-dom";

// const postsData = [
//   {
//     id: 1,
//     title: "Beautiful Sunset",
//     image: "https://via.placeholder.com/300",
//     description: "A beautiful sunset over the mountains.",
//     likes: 120,
//     comments: 45,
//     shares: 10,
//   },
//   {
//     id: 2,
//     title: "City Night Lights",
//     image: "https://via.placeholder.com/300",
//     description: "The stunning city skyline at night.",
//     likes: 200,
//     comments: 60,
//     shares: 20,
//   },
//   {
//     id: 1,
//     title: "Beautiful Sunset",
//     image: "https://via.placeholder.com/300",
//     description: "A beautiful sunset over the mountains.",
//     likes: 120,
//     comments: 45,
//     shares: 10,
//   },
//   {
//     id: 2,
//     title: "City Night Lights",
//     image: "https://via.placeholder.com/300",
//     description: "The stunning city skyline at night.",
//     likes: 200,
//     comments: 60,
//     shares: 20,
//   },
 
  
//   // Add more post data here...
// ];

const Posts = ({ isSidebarOpen }) => {



const navigate = useNavigate()
const handlenavigate=(id)=>{
  navigate(`/particularpost/${id}`)
}




  const [post , setPost] = useState([])

  console.log('posts', post)


  
// for backend
const getpost = async()=>{
  try{
const response = await get('/postroutes/getposts')
const data = response.data
setPost(data.posts)
console.log(data)

  }
  catch(error){
console.log(error)
  }
}

useEffect(()=>{
  getpost()
} , [])




  // return (
  //   <div className="posting">
  //   <div className={`posts ${isSidebarOpen ? "adjusted" : ""}`}>
  //     {post&&post.map((post , index) => {

        // return (
        // <div className="card" >
        //   <img src={`${BaseUrl}/images/${post.image}`} alt={post.title} />
        //   <div className="card-content">
        //     <h3>{post.title}</h3>
        //     <p>{post.desc}</p>
        //     <div className="interaction-bar">
        //       <span>👍 {post.likes}</span>
        //       <span>💬 {post.comments}</span>
        //       <span>🔗 {post.shares}</span>
        //       <button onClick={()=>handlenavigate(post._id)}  className="open-btn">Open</button>
        //     </div>
        //   </div>
        // </div>)





        // return (
        //   <div className="posting">
        //     <div className={`posts ${isSidebarOpen ? "adjusted" : ""}`}>
        //       {post && post.map((post, index) => (
        //         <div key={index} className="card">
        //           <img src={`${BaseUrl}/images/${post.image}`} alt={post.title} />
        //           <div className="card-content">
        //             <h3>{post.title}</h3>
        //             <p>{post.desc}</p>
        //             <div className="interaction-bar">
        //               <span>👍 {post.likes}</span>
        //               <span>💬 {post.comments}</span>
        //               <span>🔗 {post.shares}</span>
        //               <button onClick={() => handlenavigate(post._id)} className="open-btn">Open</button>
        //             </div>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // );

        return (
          <div className="posting">
            <div className={`posts ${isSidebarOpen ? "adjusted" : ""}`}>
              {post && post.map((post, index) => (
                <div key={index} className="card">
                  <img src={`${BaseUrl}/images/${post.image}`} alt={post.title} />
                  <div className="card-content">
                    <h3>{post.title}</h3>
                    <p className="card-desc">{post.desc}</p>
                    <div className="interaction-bar">
                      {/* <span>👍 {post.likes}</span>
                      <span>💬 {post.comments}</span>
                      <span>🔗 {post.shares}</span> */}

{/* // we can add the functionality of likes comment & share in future , but right now it will only show icons */}
                    
                      <span>👍 </span>
                      <span>💬</span>
                      <span>🔗 </span>
                      <button onClick={() => handlenavigate(post._id)} className="open-btn">Open</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
        
        
      // })}
    // </div>
    // </div>
  // );
};

export default Posts;
