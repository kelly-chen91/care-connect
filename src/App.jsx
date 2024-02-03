import { useState } from 'react'
import './App.css'
import About from './routes/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App
