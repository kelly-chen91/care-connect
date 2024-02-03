import { Outlet, Link } from 'react-router-dom'
import '../App.css'
export default function Layout() {
    return (
        <>
            <nav className='navigation'> {/* A list of navigation links */}
                <ul>
                    <li>
                        <Link to="/home" class="button">Home</Link>
                    </li>

                    <li>
                        <Link to="/about" class="button">About</Link>
                    </li>

                    <li>
                        <Link to="/portal" class="button">Portal </Link>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </>
    );
}