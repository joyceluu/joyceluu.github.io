import React from 'react';
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/joyceluu"><FaGithubSquare size={35}/></a>
            <FaInstagramSquare size={35}/>
        </div>
    )
}

export default Footer;