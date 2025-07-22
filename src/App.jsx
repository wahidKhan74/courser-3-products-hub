import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import { ThemeProvider } from './component/ThemeContext';


function App() {
  const [isloggedIn, setIsLoggedIn] = useState(true);


  return (
    <> 
     <ThemeProvider>
        <Header />
        <Navbar />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App
