
import Chatbot from './Chatbot';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container"> {/* Unique class for Home page */}
      <h1 className="title">Welcome to RitsVerse</h1>
      <div className="button-group">
       <Link to='/login'><button className="btn neon-button">Login</button></Link>
       <Link to='/register'><button className="btn neon-button">Sign Up</button></Link> 
      </div>
      <Chatbot/>
    </div>
  );
} 

export default Home;




