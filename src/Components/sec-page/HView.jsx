import React from 'react'
import Avatar from './Avatar'
import './spage.css'

function HView() {
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
    // console.log(obj.items.schedule[1].title)
    return <>
        <div className="h-view">
            <div className="des-scr">
                <p className='des-head'>{obj.items.schedule[0].title}</p>
                <Avatar />
                <p className="stime">{obj.items.schedule[0].startTime}</p>
                <p className="timer">{obj.items.schedule[0].interval}</p>
            </div>
            <div className="q2-plan">
                <p className='des-head'>{obj.items.schedule[1].title}</p>
                <Avatar />
                <p className="stime">{obj.items.schedule[1].startTime}</p>
                <p className="timer">{obj.items.schedule[1].interval}</p>
            </div>
            <div className="coldplay">
                <p className='des-head'>{obj.items.schedule[2].title}</p>
                <Avatar />
                <p className="stime">{obj.items.schedule[2].startTime}</p>
                <p className="timer">{obj.items.schedule[2].interval}</p>
            </div>
        </div>
    </>
}

export default HView;