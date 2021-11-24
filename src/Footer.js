import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { IoLogoCodepen } from 'react-icons/io';

function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/joyceluu" className="footerIcon"><FaGithubSquare size={35}/></a>
            <a href="https://codepen.io/joyceluu/" className="footerIcon"><IoLogoCodepen size={35}/></a>
        </div>
    )
}

export default Footer;