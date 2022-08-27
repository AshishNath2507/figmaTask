import React from 'react'
import './spage.css'
import Avatar from './Avatar'
import Reload from '../../images/Vector.png'

function VView() {
    const obj = {
        items: {
            date: 21,
            day: "Th",
            schedule: [{
                startTime: "11:00am",
                interval: "(45 mins)",
                title: 'Design Scrum',
                location: "Google Meet",
                agenda: "",
                people: "",
                attachment: "",
                number: "456 676 7889"
            }, {
                startTime: "1:20pm",
                interval: "(60 mins)",
                title: 'Q2 Planning',
                location: "Google Meet",
                agenda: "",
                people: "",
                attachment: "",
                number: "123 456 7890"
            }, {
                startTime: "09:20pm",
                interval: "(120 mins)",
                title: 'Coldplay Concert',
                location: "Google Meet",
                agenda: "",
                people: "",
                attachment: "",
                number: ""
            }]
        }
    };
    // console.log(obj.items.schedule[0].title)
    return <>
        <div className="v-view">
            <div className="timers">
                <p className="starttime">{obj.items.schedule[0].startTime}</p>
                <p className="interval">{obj.items.schedule[0].interval}</p>
            </div>
            <div className='v-view-tiles'>
                <div className="tile1">
                    <p className="tile1-heading">
                        {obj.items.schedule[0].title}
                    </p>
                    <Avatar />
                    <p className="tile1-number">{obj.items.schedule[0].number}</p>
                    <img src={Reload} alt="" className='reload' />
                </div>
            </div>
            <div className="tile2">

            </div>
            <div className="tile3"></div>
        </div>
    </>
}

export default VView