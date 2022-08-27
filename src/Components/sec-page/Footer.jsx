import React from 'react'
import HView from './HView';
import VView from './VView';

function Footer() {

    return <>
        <div className="main-container">
            <div className="container">
                <div className="line"></div>
                <div className="event-text">Upcoming Events ( 3 )</div>
                <HView />
                <div className="current-time">
                    <div className="setday">
                        <p className="getToday">Today, Thursday 21</p>
                    </div>
                    <div className="settemp">
                        <p className="getTemp">31 / 25</p>
                    </div>
                </div>
                <VView />
            </div>
        </div>
    </>
}

export default Footer