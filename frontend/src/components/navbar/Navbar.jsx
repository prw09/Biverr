import React, { useState, useEffect } from 'react';
import "./Navbar.scss";

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser={
    id:1,
    username:"Sayali",
    isSeller:true

  }

  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <span className='text'>Biverr</span>
              <span className='dot'>.</span>
            </div>
        <div className="links">
                <span>Biverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <span>{currentUser?.username}</span>
                   {open && <div className="options">
                      {
                        currentUser?.isSeller && (
                          <>
                            <span>Gigs</span>
                            <span>Add New Gigs</span>
                          </>
                        )
                      }
                      <span>Orders</span>
                      <span>Messages</span>
                      <span>Logout</span>

                    </div>}
                  </div>
                )}
        </div>
      </div>
      {active &&
        <><hr/>
         <div className='menu'>
          <span>test 1</span>
          <span>test 2</span>
         </div>
        </>
      }
    </div>
  )
}


export default Navbar;