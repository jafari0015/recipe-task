import React from 'react'
import NavBar from '../components/NavBar'
import { useState, useEffect } from 'react';

const Profile = () => {
    const [avatarUrl, setAvatarUrl] = useState('');


    useEffect(() => {
        setAvatarUrl(`https://i.pravatar.cc/150?u=${Date.now()}`);
    }, []);
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className='acountProfile'>
                <h1>Account</h1>
                <i className="fa-solid fa-gear"></i>
            </div>
            <div className='titleProfile'>
                <div>
                    <img src={avatarUrl} alt="User avatar" className='profileAvatar' />
                </div>
                <div className='subTitleProfile'>
                    <h2>James</h2>
                    <p>My profession is cooking and sharing <br />
                        new recipes with the world</p>
                </div>
            </div>
            <div className='profileCenter'>
                <p><i class="fa-solid fa-utensils"></i>Dietary Preferences </p>
                <p><i class="fa-regular fa-circle-question"></i>Help Center</p>
            </div>
            <div className='profileTerm'>
                <label htmlFor="">Language</label>
                <select>
                    <option value="English">English</option>
                    <option value="English">Persian</option>
                    <option value="English">Russian</option>
                    <option value="English">Turkey</option>
                </select>
                <p>Term of Services</p>
                <p>Privacy Policy </p>
                <p>About App</p>
                <div>
                    <button>
                        Log Out
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile