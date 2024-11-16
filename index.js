import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoutes from './routes/Auth.js';
import cookieParser from "cookie-parser"
import PostsRoutes from './routes/Post.js';
import CommentsRoutes from './routes/comments.js';
import PublicRoutes from './routes/Particularpost.js';
import ImageRoutes from './routes/image.js';


dotenv.config(); // To load environment variables
const app = express();



app.use(express.static('public'))

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // Set your frontend URL here
  credentials: true, // Enable credentials (cookies, etc.)
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.send('hello this is backend');
});



app.use("/postroutes" , PostsRoutes)


app.use("/auth" , AuthRoutes)


// call comment , abh comment ka alag banega
app.use("/comment" , CommentsRoutes)



// call public , to show the comments
app.use("/particularpost" , PublicRoutes)


// call image
app.use("/image",ImageRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
