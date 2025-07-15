import { useState } from 'react'
import './App.css'
import Welcome from './component/welcome/Welcome'
import Header from './component/Header'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Greetings from './component/Greetings'
import Counter from './component/counter/Counter'
import Dashboard from './component/Dashboard'

const items = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Products' },
  { id: 3, name: 'About' },
  { id: 4, name: 'Contact' }
];

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const name = "Alex's Miller";
  const age = 42;
  return (
    <div>
      <Header />
      <Navbar items={items} />
      {
        isloggedIn ? (
          <Welcome name={name} age={age} />
        ) : (
          <Counter />
        )
      }
      {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}

export default App
