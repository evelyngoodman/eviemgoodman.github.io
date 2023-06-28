import React from 'react';

export default function Nav(props) {
    return (
        <div className='navbar'>
            <div className='nav-buttons' id="nav-name"><a href="/"><p>Evelyn Marie</p></a></div>
            <div className='nav-buttons'><a href="/UI-Design"><p>UI Design</p></a></div>
            <div className='nav-buttons'><a href="/Software-Development"><p>Software</p></a></div>
            {/* <div className='nav-buttons'><a href="/Writing"><p>Writing</p></a></div> */}
            <div className='nav-buttons'><a href="/About"><p>About</p></a></div>
            </div>
    );
}