import React from 'react'
import Images from "../..//Assets/Images/pic.jpg"
import "./card.css"

const Card = () => {
  return (
    <div className="card-container">
            <div className="image-container">
            <img className="image-container" src={Images} alt="image"/>
            </div>
            <div className="card-title">
              <h3>Dummy</h3>
            </div>
            <div className="card-body">
              <p>Dummy dy=ummy</p>
            </div>
            <div className="btn">
             <button>
                 <a>
                     View more
                 </a>
             </button>
            </div>
     
          </div>
  )
}

export default Card



