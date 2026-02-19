import React from 'react'
import { Save } from "lucide-react";

const Card = (props) => {

  return (
    <div className="card">

        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save <Save size={12} /> </button>
        </div>

        <div className="center">
          <h3> {props.company} <span>{props.datePosted}</span> </h3>
          <h2>{props.post}</h2>
          <div className='tag' >
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
  
          <div className="bottom-info">
            <h3 className="price">{props.pay}</h3>
            <p className="location">{props.location}</p>
          </div>

          <button className="apply-btn">Apply Now</button>

        </div>



      </div>
  )

}

export default Card
