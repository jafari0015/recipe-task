import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Categories from '../components/Categories';
import Featured from '../components/Featured'
import { useNavigate } from 'react-router-dom';
import Popular from '../components/Popular'
import SideBar from '../components/SideBar';
import SplitText from '../Animation/SplitText';

const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLoginPage = () => {
    navigate('/profile')
  }
  const openSideBar = () => {
    setIsOpen(true);
  }
  useEffect(() => {
    setAvatarUrl(`https://i.pravatar.cc/150?u=${Date.now()}`);
  }, []);

  return (
    <>
      <div className="main">
        <NavBar />
        {isOpen && <SideBar onClose={() => setIsOpen(false)} />}
        <div className="header-h">
          <div className='lineMenue' onClick={openSideBar}>
            <div className='one'></div>
            <div className='two'></div>
            <div className='four'></div>
          </div>
          <div>
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="avatarImage" onClick={handleLoginPage} />

          </div>
        </div>
        {/* -------- Greeting and Puncline ----------- */}
        <div className='greetingHome'>
          <h1>
            <SplitText
              text="Hi , James!"
              delay={100}
              className='titleHome'
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
          <p> Healthy and nutritious food recipes </p>
        </div>
        <div>
          <div className="searchInput">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Recipes"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Categories searchTerm={searchTerm} />
      <Featured searchTerm={searchTerm} />
      <Popular searchTerm={searchTerm} />

    </>
  )
}

export default Home