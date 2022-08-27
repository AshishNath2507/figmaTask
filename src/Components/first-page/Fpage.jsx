import React from 'react'
import "./fpage.css"
import CustomSvg, { ArrowVector } from './CustomSvg'


function Fpage() {

  const date = new Date();
  const year = date.getFullYear();
  // console.log(year)

  return (
    <>
      <div className="header">
        <p className='hd1'>Calender</p>
        <p className='hd2'>{year}</p>
      </div>
      <div className="center">
        <CustomSvg />
      </div>
      <div className="footer-content">
        <div className="footer-para">
          <div className="footerp1">
            <p className='typo1'>Hi Aman,</p>
          </div>
          <div className="footerp2">
            <p className='typo2'>Welcome to your daily event calendar. Be more engaging & personalised than ever before. We'll help you in <span className='typo2-bold'>Tracking Upcoming Events, Scheduling Meetings & Creating New Event!</span></p>
          </div>
        </div>
        <button className='ellipse-btn'><ArrowVector /></button>
        <div className="ellipse"></div>
      </div>
    </>
  )
}

export default Fpage;