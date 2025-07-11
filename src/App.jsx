import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome'
import Header from './component/Header'
import Footer from './component/Footer'


function App() {
  const [count, setCount] = useState(0)
  const name = "Alex's Miller";
  const age = 42;
  return (
    <div>
      <Header />   
      <Welcome name={name} age={age} />
      <Footer />   
    </div>
  );
}

export default App
