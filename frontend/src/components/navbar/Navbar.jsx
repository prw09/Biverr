import React, { useEffect,useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {
  const [active,setActive] =useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };


  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    
    <div className={active ? "navabr active" : "navbar"}>
        <div className="container">
            <div className="logo">
              {/* <Link></Link> */}
              <span className='text'>Biverr</span>
                 <span className='dot'>.</span>
            </div>
            <div className="links">
              <span>Biverr Business</span>
              <span>Explore</span>
              <span>English</span>
              <span>Sign In</span>
              {!currentUser?.isSeller && <span>Become a Seller</span>}

              {!currentUser && <button className='button'>Join</button>}
              {!currentUser && (
                <div className="user">
                  <span>{currentUser?.username}</span>
                  <div className="options">

                  </div>
                </div>
              )}
            </div>
          </div>
        <hr/>
        <div className="menu">
          <span>test1</span>
          <span>test2</span>
        </div>
    </div>
  )
}

export default Navbar;