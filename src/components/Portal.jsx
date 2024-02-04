import { useEffect, useState } from "react";
import "./portal.css";

export default function Portal() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);
  return (
    <div className="username">
      <h1>Hello {user}</h1>
    </div>
  );
}
