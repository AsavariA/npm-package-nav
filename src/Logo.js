import React from 'react'
import './styles.css';

const Logo = (props) => {
    return (
        <div>
            <img className="logo-img" src={props.href}></img>
        </div>
    )
}

export default Logo
