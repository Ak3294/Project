import { useState } from 'react';
import Navbar from './Components/Navbar';
import './index.css'; // Import Tailwind CSS
import Sidebar from './Components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Sidebar/>
    </>
  )
}

export default App
