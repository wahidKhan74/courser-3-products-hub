import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'


const items = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Greetings' },
  { id: 3, name: 'Counter' },
  { id: 4, name: 'Dashboard' },
  { id: 5, name: 'Basic' },
  { id: 7, name: 'Login' },
];

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(true);


  return (
    <> 
      <Header />
      <Navbar items={items} />
      <Footer />
    </>
  );
}

export default App
