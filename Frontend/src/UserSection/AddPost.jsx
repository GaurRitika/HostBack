import React, { useState } from 'react';
import './AddPost.css';
import { post } from '../services/Endpoint'; // Ensure this is your API call function
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddPost = () => {

  const navigate = useNavigate();

  const [value, setValue] = useState({
    title: "",
    desc: "",
    postimage: ""
  });

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    if (name === 'postimage') {
      setValue({
        ...value,
        postimage: e.target.files[0] // Store the file object for image
      });
    } else {
      setValue({
        ...value,
        [name]: inputValue // Update the text fields (title and desc)
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData(); // Create a new FormData object
      formData.append('title', value.title); // Append title
      formData.append('desc', value.desc); // Append description

      // Append post image if it exists
      if (value.postimage) {
        formData.append('postimage', value.postimage); // Append the file
      }

      const response = await post('/postroutes/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type
        },
      });

      const data = response.data; // Get response data
      if (response.status === 200) {
        navigate('/Myhome'); // Navigate to another page
        toast.success(data.message); // Show success message
      }
    } catch (error) {
      // Handle errors and show appropriate messages
      if (error.response) {
        toast.error(error.response.data.message || 'Cannot create post, failed');
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
      console.error(error);
    }
  };

  return (
    <div className="add-post-container">
      <h2 className="add-post-title">Create New Post</h2>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={value.title}
            name="title" // Corrected to "title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            onChange={handleChange}
            value={value.desc}
            name="desc" // Name set to "desc"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="postimage"
            name="postimage" // Name for image input
            onChange={handleChange} 
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
