import './App.css';
import CreatePost from './Pages/CreatePost';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import NavBar from './Pages/components/NavBar'
import { useState } from 'react';
import BlogArticle from './Pages/BlogArticle';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="">
      <Router>
        
      <NavBar toggle={toggleDarkMode}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/create' element={<CreatePost/>}/> */}
          <Route path='/article/:blogId' element={<BlogArticle/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
