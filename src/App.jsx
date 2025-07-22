import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'


function App() {
  const [isloggedIn, setIsLoggedIn] = useState(true);


  return (
    <> 
      <Header />
      <Navbar />
      <Footer />
    </>
  );
}

export default App
