import { useEffect, useState } from "react";
import '../portal.css'

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return (
        <div className="">
            <h1 className="username">Hello {user}</h1>
        </div>
    );
}