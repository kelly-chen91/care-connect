import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import cna from './cna.png'
import LoginForm from './loginform';
import logo from './logo.png'


function App() {
  return (
  <div> {/* Acts as a container that holds the element */}

  {/* Section is used to represent distinct sections of content within a webpage */}
  

    <section> {/* Mission Statement */}
      {/* <img src={cna} class="background-image" alt="Background Image" /> */}
      <p class="mission-statement">
      Mission Statement: 
      “A collaborative community comprised of undergraduate students <br/>
      in biology, psychology, and computer science, 
      united in their efforts to create a <br />
      harmonious intersection between healthcare and technology to further improve
      the life <br />
      of seniors we love.”
      </p>
    </section>

    <section> 
      <nav className='navigation'> {/* A list of navigation links */}
      <img src={logo} class="logo" alt="Company Logo" />
       <ul>
        <li>
          <a href="/Home" class="button">Home</a>
        </li>

        <li>
          <a href="/About" class="button">About</a>
        </li>

        <li>
          <a href="/Portal" class="button">Portal </a>
        </li>
       </ul>
  
      </nav>
    </section>

    <LoginForm/>

    </div>
  );
 
}

export default App
