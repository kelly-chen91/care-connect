import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import mission from "./mission.png";
import LoginForm from "./loginform";
import logo from "./logo.png";

function App() {
  return (
    <div>
      {" "}
      {/* Acts as a container that holds the element */}
      {/* Section is used to represent distinct sections of content within a webpage */}
      <section>
        <nav className="navigation">
          {" "}
          {/* A list of navigation links */}
          <div class="logo">
            <img src={logo} class="logo" alt="Company Logo" />
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="/Home">Home</a>
              </li>

              <li>
                <a href="/About">About</a>
              </li>

              <li>
                <a href="/Portal">Portal </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        {" "}
        <img src={mission} class="background-image" alt="Background Image" />
        <div>
          <p class="mission-statement">
            “A collaborative community comprised of undergraduate students{" "}
            <br />
            in biology, psychology, and computer science, united in their <br />
            efforts to create a harmonious intersection between healthcare{" "}
            <br />
            and technology to further improve the life 
            of seniors we love.”
          </p>
        </div>
      </section>
      <p class="copy-right">&copy;2024 CareConnect. All rights reserved.</p>
      <LoginForm />
    </div>
  );
}

export default App;
