import { useState } from 'react'
// import './App.css'
import { getImageUrl } from '../utils'

export default function About() {
    return (
        <div>
            <p>Hello World</p>
            {/* <ProfileList /> */}
        </div>
    );
}

function ProfilePic({ person, size }) {
    <img
        className='profilePic'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
    />
}

function ProfileList() {
    return (
        <div>
            <ProfilePic
                person={{
                    name: 'Jane Doe',
                    imageId: 'emoji.png'
                }}
            />
            <ProfilePic
                person={{
                    name: 'JaneDoe',
                    imageId: 'emoji.png'
                }}
            />
        </div>
    );
}