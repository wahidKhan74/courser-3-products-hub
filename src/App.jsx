import { useState } from 'react'
import './App.css'
import Welcome from './component/Welcome'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Greetings from './component/Greetings'
import Counter from './component/Counter'

const items = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Products' },
  { id: 3, name: 'About' },
  { id: 4, name: 'Contact' }
];

function App() {
  const [count, setCount] = useState(0)
  const name = "Alex's Miller";
  const age = 42;
  return (
    <div>
      <Header />   
      <Navbar items={items} />
      {/* <Welcome name={name} age={age} /> */}
      {/* <Greetings name={name} age={age} />  */}
      <Counter />
      <Footer />   
    </div>
  );
}

export default App
