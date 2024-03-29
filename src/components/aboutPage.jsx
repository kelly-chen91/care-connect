import React from "react";
import "./aboutPage.css";
import aboutUsPic from "../assets/about us pic.png";
import ally from "../assets/ally.png";
import chuen from "../assets/chuen_chen.png";
import fanny from "../assets/fanny_pan.png";
import kaitlyn from "../assets/kaitlyn.png";
import kelly from "../assets/kelly.png";
import kiko from "../assets/kiko_zhou.png";
import maggie from "../assets/maggie.png";
import zhen from "../assets/zhenting.png";

function AboutPage() {
  return (
    <html>
      <div>
        <div class="text-box">
          <h1>About Us</h1>
          <p>ABOUT WHAT WE DO:</p>
          <a class="aa">
            When placing a senior citizen in a nursing home facility, it
            involves placing trust in the nursing staff with the care of a
            cherished family member. This trust also brings forth a complex
            symphony of emotions, entwining anxiety, solitude, and guilt—a
            complex blend of emotions that accompanies the difficult choice of
            entrusting a beloved family member to the care of a nursing home.
          </a>
          <br></br>
          <br></br>
          <a class="aa">
            Having served as Certified Nursing Assistants (CNAs) in the past,
            the CareConnect Team possesses firsthand experience with the
            intricacies of the patient-provider relationship within the nursing
            home environment. Numerous calls, messages, and visits from worried
            families have dominated our days, not only affecting the quality of
            care to our patients but also creating a challenging environment for
            maintaining open communication and a focused dedication to their
            well-being. CareConnect offers a direct, accessible, user-friendly
            line of communication between the family member and the nursing home
            staff --all while ensuring a seamless experience that does not add
            to the demanding responsibilities of CNAs. We hope to build a
            stronger bridge connecting family, patient, and provider: the
            trifecta of uniting essential figures within the healthcare network.
          </a>
          <br></br>
          <br></br>
          <p>OUR HISTORY:</p>
          <a class="aa">
            Embarking on their academic journey at Stony Brook University,
            Allison Pascual, Chu En Chen, Fanny Pan, and Kiko Zhou delved into
            the world of Biology, Health Science, and Psychology. They achieved
            their Nursing Assistant certification in the summer of 2023 and
            subsequently joined the ranks of the Long Island State Veterans Home
            as CNAs. At the Veterans Home, they not only honed their clinical
            skills but also unveiled the intricacies of the healthcare system.
            Through this immersive experience, Allison, Chu En, Fanny, and Kiko
            gained profound insights into the flaws and gaps within the system,
            sparking a collective passion to contribute to positive change.
            Their journey transcended beyond the confines of textbooks, as they
            became catalysts for improvement in the ever-evolving landscape of
            healthcare.
          </a>
          <br></br>
          <br></br>
          <a class="aa">
            In a harmonious blend of expertise, they joined forces with computer
            science students, Maggie Lin, Kelly Chen, Zhenting Ling, and Kaitlyn
            Chau. Driven by a shared ambition, they collaborated seamlessly.
            Together, they birthed an interdisciplinary powerhouse, a dynamic
            organization with a resolute mission – to unravel the intricate
            challenges in geriatric healthcare through the lens of cutting-edge
            technology solutions.
          </a>
          <br></br>
          <br></br>
          <p>CareConnect GOALS:</p>
          <a class="aa">
            Notifying family members about the personal daily activities of
            loved ones to bring peace of mind. This includes: <br></br>When
            meals are served<br></br>
            When medication is given<br></br>When showers are given<br></br>
            <br></br>Linking family members to the nursing home recreational
            schedule which includes:<br></br>
            Recreational events<br></br>
            Holidays<br></br>
            <br></br>
            Overall, we aim to make the family feel more involved in the life of
            their loved ones and to ensure that our seniors do not feel
            forgotten!
          </a>
        </div>
        <img class="aboutPic" src={aboutUsPic}></img>
      </div>
      <div class="teamImageContainer">
        <img class="teamPic" src={ally}></img>
        <img class="teamPic" src={chuen}></img>
        <img class="teamPic" src={fanny}></img>
        <img class="teamPic" src={kaitlyn}></img>
        <img class="teamPic" src={kelly}></img>
        <img class="teamPic" src={kiko}></img>
        <img class="teamPic" src={maggie}></img>
        <img class="teamPic" src={zhen}></img>
      </div>
    </html>
  );
}

export default AboutPage;
