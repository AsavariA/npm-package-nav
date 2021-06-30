import React, { useState, useEffect } from 'react'
import './styles.css';
import Navlinks from './Navlinks'
import Logo from './Logo'

const Navbar = (props) => {
    const [sticky, setSticky] = useState(false)
    const [toggleNav, setToggleNav] = useState(true)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        }
        else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className="navbar" style={{ position: sticky ? 'fixed' : 'inherit', backgroundColor: props.color }}>
            <Logo href={props.logo} />
            <Navlinks toggleNav={toggleNav} color={props.color} drawerColor={props.drawerColor} drawerHeight={props.drawerHeight}>
                {props.children}
            </Navlinks>
            <div className="burger" onClick={() => setToggleNav(!toggleNav)}>
                <div className="line1" style={{ backgroundColor: props.burgerColor, transform: !toggleNav ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
                <div className="line2" style={{ backgroundColor: props.burgerColor, opacity: !toggleNav ? '0' : '1' }}></div>
                <div className="line3" style={{ backgroundColor: props.burgerColor, transform: !toggleNav ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
            </div>
        </div>
    )
}

export default Navbar
