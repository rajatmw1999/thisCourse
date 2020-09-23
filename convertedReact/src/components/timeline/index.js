import React from 'react';
import {timelineData} from '../../shared/timelineData';
import './index.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: "green" }}>
                {data.topic}
            </span>
            {/* <time>{data.date}</time> */}
            <p>{data.data}</p>
          
            <span className="circle" />
        </div>
    </div>
);

class Timeline extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state ={
            final:null
        }
    }
    componentDidMount(){
        var topics = this.props.topics.split(',');
        var data = this.props.data.split('=');
        // console.log(topics);
        // console.log(data);
        var pass=[];
        var i=0;
        topics.forEach(function(data2){
            pass.push({
                "topic":topics[i],
                "data":data[i]
            });
            ++i;
        });
        console.log(pass);
        this.setState({
            final:pass
        });
    }
    render(){
        if(this.state.final)
        return(
            <div className="timeline-container col-12">
                   {this.state.final.map((data2) => (
                   <TimelineItem data={data2} />
            ))}
            </div>
        );
        else
        return(
            <div></div>
        )
    }
}

// const Timeline = () =>
    // props.data.length > 0 && (
    //     <div className="timeline-container col-12">
    //         {timelineData.map((data) => (
    //             <TimelineItem data={this.props} />
    //         ))}
    //     </div>
    // console.log(data);
// );

export default Timeline;
