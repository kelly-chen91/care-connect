import { useEffect, useState } from "react";

export default function Portal() {
    const [user, setUser] = useState("Guest")

    useEffect(() => {
        setUser(window.localStorage.getItem("user"))
    }, [])
    return <h1>Hello {user}</h1>;
}