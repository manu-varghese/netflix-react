import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

  const [show,setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll' , transitionNavBar);
    return () => window.removeEventListener('scroll' , transitionNavBar)
  },[])

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }
    
    

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className='nav__logo' alt="logo" />
        <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" className='nav__avatar' alt="avatar" />
    </div>
  )
}

export default Nav