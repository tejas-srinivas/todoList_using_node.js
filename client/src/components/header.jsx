import React from 'react'

function Header() {
  return (
    // <div>header</div>
    <header>
        <div className="header__container">
            <div className="line"></div>
            <h1>Todo List</h1>
        </div>
        <div className="line2"></div>
        <div className="label">Add your tasks here.</div>
    </header>
  )
}

export default Header