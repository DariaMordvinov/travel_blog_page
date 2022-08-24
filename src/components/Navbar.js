import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

// Font Awesome icon for planet Earth
const planet = <FontAwesomeIcon className="nav--icon" icon={faEarthAmericas} />

export default function Navbar() {
    return (
        <nav>
            {planet}
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}