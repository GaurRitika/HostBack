import React, { useState , useEffect} from 'react';
import {get} from '../services/Endpoint'
import { useParams } from 'react-router-dom';
import { BaseUrl} from '../services/Endpoint'
import './PostDesc.css';


const Post = () => {
  const [comment, setComment] = useState('');
  const {id} = useParams()
  console.log('id' ,id)
const [singlepost , setSinglePost] = useState(null)




  useEffect(()=>{
SinglePost()
  },[])

  const SinglePost = async()=>{
  try{
const response = await get(`./particularpost/singlepost/${id}`)
const data = response.data
setSinglePost(data.Post)
console.log(data)
  }
  catch(error){
console.log(error)
  }
  }

  const styles = {
    commentContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    profileIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    username: {
      fontWeight: 'bold',
    },
  };


  const comments = [
    {
      username: 'JohnDoe',
      profileIcon: 'https://randomuser.me/api/portraits/men/1.jpg',
      comment: 'This post is really insightful!',
    },
    {
      username: 'JaneSmith',
      profileIcon: 'https://randomuser.me/api/portraits/women/2.jpg',
      comment: 'I totally agree with the points mentioned here.',
    },
    {
      username: 'RandomUser123',
      profileIcon: 'https://randomuser.me/api/portraits/men/3.jpg',
      comment: 'Thanks for sharing this!',
    },
    {
      username: 'TechGeek',
      profileIcon: 'https://randomuser.me/api/portraits/men/4.jpg',
      comment: 'Great read, learned a lot.',
    },
    {
      username: 'NatureLover',
      profileIcon: 'https://randomuser.me/api/portraits/women/5.jpg',
      comment: 'Loved the perspective!',
    },
  ];


  const Comment = ({ username, profileIcon, comment }) => (
    <div style={styles.commentContainer}>
      <img src={profileIcon} alt="Profile" style={styles.profileIcon} />
      <div>
        <p style={styles.username}>{username}</p>
        <p>{comment}</p>
      </div>
    </div>
  );

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle the comment submission
    alert(`Comment Submitted: ${comment}`);
    setComment(''); // Clear the comment field after submission
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">{singlepost && singlepost.title}</h1>
      <div className="image-container">
        <img 
          src={singlepost && `${BaseUrl}/images/${singlepost.image}`}
          alt="Description of the image"
          className="blog-image"
        />
      </div>
      <p className="blog-content">
        Welcome to my Post! 
      
      </p>
      <div>
      {singlepost && singlepost.desc}
      </div>

      <div className="comment-section">
        <h2 className="comment-title">Add a Comment</h2>
        <form onSubmit={handleSubmit} className="comment-form">
          <label htmlFor="comment" className="comment-label">Your Comment</label>
          <textarea
            id="comment"
            className="comment-textarea"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            required
          />
          <button type="submit" className="comment-submit">Submit</button>
        </form>
      </div>
      <hr/>


      <h3> Comments</h3>


{singlepost && singlepost.comments.map((comment)=>{
  return(
 <div>
     <Comment
          username={comment.userId.FullName}
        profileIcon={`${BaseUrl}/images/${comment.userId.profile}`}
        comment={comment.comment}
        />
    {/*  {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          profileIcon={comment.profileIcon}
          comment={comment.comment}
        />
      ))} */}


      
    </div>
  )
})}



     

    
    </div>

  
  );

  
}

export default Post;








