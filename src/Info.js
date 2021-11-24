import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

function Info() {
    return (
        <div className="info">
        <div className="headerInfo">
            <h1> Joyce Luu </h1>
            <span className="headerInfo--title"> Software Engineer </span>
            <div className="headerInfo--contact">
            <button className="contact--button contact--email"> <MdEmail size={20} className="icon"/> Email </button> 
            <a href="https://www.linkedin.com/in/joyceluu816/"><button className="contact--button contact--linkedin"><BsLinkedin size={20} className="icon"/> LinkedIn </button></a>
            </div>
        </div>
        <div className="about">
            <h2> About </h2>
            <p> Hello! I'm a student and software engineer from the <b>University of California, Irvine</b>. Previously, I've interned as a software engineer at <b>Amazon</b> twice. 
            You can find me now at <b>TBD</b>!</p>

            <h2> Interests </h2>
            <p>Thrifting, baking, digital art, and more to come..</p>
        </div>
        </div>
    )
}

export default Info;