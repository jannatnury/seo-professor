import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Navbar>
      <Footer/>
    </div>
  );
}

export default App;
