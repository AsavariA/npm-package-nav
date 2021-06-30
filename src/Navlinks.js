import React, { useState, useEffect } from 'react'

const Navlinks = (props) => {
    const mediaMatch = window.matchMedia('(max-width: 760px)');
    const [matches, setMatches] = useState(mediaMatch.matches);
    const styles = {
        transform: matches && props.toggleNav ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: matches && props.drawerColor ? props.drawerColor : props.color,
        height: matches ? props.drawerHeight : 'auto'
    }

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });

    return (
        <div className="navlinks" style={styles}>
            {props.children}
        </div>
    )
}

export default Navlinks
