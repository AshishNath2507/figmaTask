import React from 'react'
import LeftArrow, { DownArrow, Ellipse } from "./CustomSvg"
import "./spage.css"

function Header() {

    const date = new Date()
    const year = date.getFullYear()

    return <>
        <div className="headerSpage">
            <div className="leftCon">
                <div className="arrow">
                    <LeftArrow />
                </div>
                <div className="year">
                    {year}
                </div>
                <div className="month">
                    <p>September</p>
                    <DownArrow />
                </div>
            </div>
            <div className="ellipse2">
                <Ellipse />
            </div>
        </div>
    </>
}

export default Header