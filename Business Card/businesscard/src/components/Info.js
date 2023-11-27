import React from 'react'
import ReactDOM from 'react-dom'
import pic from './pic.jpg'

export default function Info(){
    return(
      <div className="info">
        <img src={pic} alt="" className='pic'/>
        <h2 className='name'>Fatima Nasir</h2>
        <h6 className='post'>MERN Stack Developer</h6>
        <div className='btn'><button className='btn-1'>Email</button>
        <button className='btn-2'>LinkdIn</button></div>
      </div>
    )
  }

  