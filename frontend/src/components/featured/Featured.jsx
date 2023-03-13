import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
   <div className="featured">
      <div className="container">
        <div className="left">
            <h1>Find a perfect freelance services for your bussiness</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder="Try building a mobile app" />
                </div>
                <button>Sreach</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web design</button>
                <button>Wordpress</button>
                <button>Logo design</button>
                <button>Ai services</button>
            </div>
        </div>
        <div className="rigth">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
   </div>
  )
}

export default Featured;