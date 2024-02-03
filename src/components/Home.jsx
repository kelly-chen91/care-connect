import '../App.css'
import LoginForm from './loginform';
import cna from '../assets/cna.png';
export default function Home() {
    return (
        <div>
            <section> {/* Company Name */}
                <p class="company-name"><i>CareConnect</i></p>
            </section>

            <section> {/* Mission Statement */}
                <img src={cna} class="background-image" alt="Background Image" />
                <p className="mission-statement">
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
    );
}