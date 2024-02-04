import { useEffect, useState } from "react";
import "../portal.css";
// import "../App.css";

export default function Portal() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    setUser(window.localStorage.getItem("user"));
  }, []);
  //   return (

  // <div class="text-center w-screen">
  //   <h1>Hello {user}</h1>
  // </div>
  //   );
  // }

  return (
    <div className="relative w-screen">
      {/* Text on the top left */}
      <div className="username">
        <p>Helflo {user}</p>
      </div>
      {/* Main content */}
      <div className="text-center">
        <h1>ello {user}</h1>
      </div>
    </div>
  );
}
