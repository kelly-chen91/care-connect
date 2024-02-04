import '../App.css'
import LoginForm from './loginform';
import cna from '../assets/cna.png';
import mission from "../mission.png";
import Layout from './Layout';

export default function Home({ setUser }) {
    return (
        <div className='grid grid-cols-10 items-center gap-40 grid-flow-col'>
            {" "}
            {/* Acts as a container that holds the element */}
            {/* Section is used to represent distinct sections of content within a webpage */}
            <div className='col-span-6'>
                {" "}
                <div className="relative">
                    <img src={mission} class="background-image" alt="Background Image" />
                        <p class="mission-statement">
                            A collaborative community comprised of undergraduate students in biology,
                            psychology, and computer science, united in their efforts to create a
                            harmonious intersection between healthcare and technology to further improve the life
                            of seniors we love.
                        </p>
                </div>

            </div>
            <div className='col-span-4'>
                <LoginForm setUser={setUser} />
            </div>
        </div>
    );
}