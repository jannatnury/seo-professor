import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Blogs from './Components/Pages/Blogs';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/log-in" element={<Login/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
        <Footer/>
      </Navbar>
      
    </div>
  );
}

export default App;
