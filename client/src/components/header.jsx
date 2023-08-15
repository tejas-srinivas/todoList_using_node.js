import React, { useEffect } from 'react'
import { useState } from 'react'

function Header() {

  const [time,setTime] = useState(new Date())
  useEffect(() => {
    setInterval(()=>setTime(new Date()),1000)
  },[])
  var showDate = new Date()
  var dateString = showDate.toDateString();

  return (
    // <div>header</div>
    <header>
        <div className="header__container">
            <div className="line"></div>
            <h1>Todo List</h1>
            <div className="dateTime" style={{marginLeft:'auto'}}>
              <h3 style={{color:"#F4E0B9"}}>{dateString}</h3>
              <h5 style={{color:"#F4E0B9",fontSize:'18px',marginLeft:'auto'}}>{time.toLocaleTimeString()}</h5>
            </div>    
        </div>
        
        <div className="line2"></div>
        <div className="label">Add your tasks here.</div>
    </header>
  )
}

export default Header
