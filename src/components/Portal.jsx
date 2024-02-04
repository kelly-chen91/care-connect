import { useEffect, useState } from "react";
import '../portal.css'
// import ProfilePic from "./Profile";
import cna_shift from '../assets/cna_shift.jpeg'
import notifications from '../assets/notifications.jpeg'
import calendar from '../assets/calendar.jpeg'
import nurse from "../assets/nurse.png"

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return (
        <div>
            <h1 className="username">Hello {user}</h1>
            <div className="flex items-center justify-center px-12">
                <div>
                    {/* <img
                        className='w-4/5'
                        src={cna_shift}
                        alt='Jane Smith'
                    /> */}
                    <h2 className="text-4xl text-center">CNA of the Shift</h2>
                    <div className="flex items-center justify-center">
                        <div className="text-center text-2xl">
                            <p>Name: Jennifer Smith</p>
                            <p>Hours: 7:00AM to 3:30PM</p>
                            <p>123-123-1234</p>
                        </div>
                        <img
                            className='w-4/12 rounded-full'
                            src={nurse}
                            alt='Jane Smith'
                        />
                    </div>

                </div>
                <div>
                    <div className="flex flex-col bg-indigo-200 rounded-3xl p-4 w-80 text-center">
                        {/* <img
                        className='w-4/5'
                        src={notifications}
                        alt='notification'
                    /> */}
                        <p className="text-2xl">Notifications</p>
                        <div className="bg-white rounded-3xl p-4 m-2"> Col 1 </div>
                        <div className="bg-white rounded-3xl p-4 m-2"> Col 2 </div>
                        <div className="bg-white rounded-3xl p-4 m-2"> Col 3 </div>
                        <div className="bg-white rounded-3xl p-4 m-2"> Col 4 </div>
                    </div>
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