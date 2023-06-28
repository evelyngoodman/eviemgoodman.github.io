import React from 'react';
import Downtime from '../img/downtime.png';
import TraderJoes from '../img/traderjoes.png';
import Broadcast from '../img/broadcast.png';
import Visio from '../img/visio.png';

function CaseStudy(props) {
    return (
        <div className='casestudy'>
            <div>
                <h1 id="CS-h1">{props.title}</h1>
                <h2 id="CS-h2">{props.desc}</h2>
            </div>
            <p id="CS-p">{props.date}</p>
            <img src={props.img} alt='UI design example' height='320' width='1180'/>
        </div>
    );
}

export default function UI(props) {
    return (
        <div className='case-studies'>
            <CaseStudy className='casestudy' title='Broadcast' desc='Hackathon Submission' date='January 2022' img={Broadcast}/>
            <CaseStudy className='casestudy' title='Trader Joes' desc='Design Challenge Proposal' date='May 2022' img={TraderJoes}/>
            <CaseStudy className='casestudy' title='Downtime' desc='Hackathon Submission' date='April 2022' img={Downtime}/>
            <CaseStudy className='casestudy' title='Visio' desc='Design for America Project' date='June 2022' img={Visio}/>
        </div>
    );
}