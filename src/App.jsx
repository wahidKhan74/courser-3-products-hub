import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import { ThemeProvider } from './component/ThemeContext';
import store from './app/store';
import { Provider } from 'react-redux'

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(true);


  return (
    <> 
     {/* step: Wrapping the application with ThemeProvider to provide theme context */}
     <Provider store={store}>
        <ThemeProvider >
            <Header />
            <Navbar />
            <Footer />
          </ThemeProvider>
      </Provider>
    </>
  );
}

export default App
