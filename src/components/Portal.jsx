import { useEffect, useState } from "react";
import '../portal.css'
// import ProfilePic from "./Profile";
import fanny_pan from '../assets/fanny_pan.png'

export default function Portal() {
  const [user, setUser] = useState("Guest");

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
