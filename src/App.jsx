import { useState } from 'react'
import './App.css'
import cna from './cna.png'
import LoginForm from './loginform';

import About from './routes/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>

      <div> {/* Acts as a container that holds the element */}

        {/* Section is used to represent distinct sections of content within a webpage */}

        <section> {/* Company Name */}
          <p class="company-name"><i>CareConnect</i></p>
        </section>

        <section>
          <nav className='navigation'> {/* A list of navigation links */}
            <ul>
              <li>
                <Link to="/Home" class="button">Home</Link>
              </li>

              <li>
                <Link to="/About" class="button">About</Link>
              </li>

              <li>
                <Link to="/Portal" class="button">Portal </Link>
              </li>
            </ul>

          </nav>
        </section>

        <section> {/* Mission Statement */}
          <img src={cna} class="background-image" alt="Background Image" />
          <p class="mission-statement">
            Mission Statement:
            “A collaborative community comprised of undergraduate students <br />
            in biology, psychology, and computer science,
            united in their efforts to create a <br />
            harmonious intersection between healthcare and technology to further improve
            the life <br />
            of seniors we love.”
          </p>
        </section>

        <LoginForm />

      </div>
      <Routes>
        <Route
          path="/Home"
        />
        <Route
          path="/About"
        />
        <Route
          path="/Portal"
        />

      </Routes>
    </Router>

  );
}

export default App
