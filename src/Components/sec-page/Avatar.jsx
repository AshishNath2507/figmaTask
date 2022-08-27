import React from 'react'
import Avatars from '../../images/Ellipse7.png'
import './spage.css'

function Avatar() {
    return <>
        <div className="avatars">
            <img src={Avatars} alt="" />
            <img src={Avatars} alt="" />
            <img src={Avatars} alt="" />
            <img src={Avatars} alt="" />
        </div>
    </>
}

export default Avatar