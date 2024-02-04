import { useEffect, useState } from "react";
import '../portal.css'
// import ProfilePic from "./Profile";
import fanny_pan from '../assets/fanny_pan.png'

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return (
        <div>
            <h1 className="username">Hello {user}</h1>
            <div className="w-6/12">
                <img
                    className='profilePic'
                    src={fanny_pan}
                    alt='Fanny Pan'
                />
            </div>
        </div>
    );
}