import { useEffect, useState } from "react";

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return <div class="text-center w-screen">
        <h1 >Hello {user}</h1>
    </div>;
}