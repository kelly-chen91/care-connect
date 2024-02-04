import { Outlet, Link } from 'react-router-dom'
import '../App.css'
import logo from "../logo.png";

export default function Layout() {
    return (
        <section>
            <nav className="navigation flex items-center justify-between">
                {" "}
                {/* A list of navigation links */}
                <div class="logo">
                    <img src={logo} class="logo" alt="Company Logo" />
                </div>
                <div class="menu">
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>

                        <li>
                            <a href="/about">About</a>
                        </li>

                        {/* <li>
                            <a href="/portal">Portal </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </section>
    );
}