import React from 'react';
import Anemone from '../img/anemone.png';
import OceansFive from '../img/oceans-five.png';

function CaseStudy(props) {
    return (
        <div className='casestudy'>
            <div>
                <h1 id="CS-h1">{props.title}</h1>
                <h2 id="CS-h2">{props.desc}</h2>
            </div>
            <p id="CS-p">{props.date}</p>
            <img src={props.img} alt='UI design example' height='280' width='480'/>
        </div>
    );
}

export default function SWE(props) {
    return (
        <div className='case-studies'>
            <CaseStudy className='casestudy' title='Anemone' desc='Informatics Capstone' date='June 2023' img={Anemone}/>
            <CaseStudy className='casestudy' title='Nautical Navigator' desc='Client-Side Development Course' date='June 2023' img={OceansFive}/>
        </div>
    );
}