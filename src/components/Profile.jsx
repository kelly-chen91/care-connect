import { useState } from 'react'
// import './App.css'
import { getImageUrl } from '../utils'

export default function ProfilePic({ person, size, url }) {
    <img
        className='profilePic'
        src={url}
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