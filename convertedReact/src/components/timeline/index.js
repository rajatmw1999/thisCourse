import React from 'react';
import {timelineData} from '../../shared/timelineData';
import './index.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
          
            <span className="circle" />
        </div>
    </div>
);


const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container col-12">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
);

export default Timeline;
