import { useEffect, useState } from "react";
import '../portal.css'
// import ProfilePic from "./Profile";
import cna_shift from '../assets/cna_shift.jpeg'
import notifications from '../assets/notifications.jpeg'
import calendar from '../assets/calendar.jpeg'

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return (
        <div>
            <h1 className="username">Hello {user}</h1>
            <div className="flex items-center justify-between px-12">
                <div>
                    <img
                        className='w-4/5'
                        src={cna_shift}
                        alt='Jane Smith'
                    />
                </div>
                <div>
                    <img
                        className='w-4/5'
                        src={notifications}
                        alt='notification'
                    />
                </div>


            </div>
            <div className="flex justify-center px-8">
                <img
                    className='w-4/5'
                    src={calendar}
                    alt='calendar'
                />
            </div>
        </div>
    );
}