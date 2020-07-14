import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CourseDetail from './CourseDetail';
import * as serviceWorker from './serviceWorker';

var data={
  coursename : "Course Name Here",
  courseDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  tags : [{id:1 ,name:"Python" },
          {id:2 , name:"React"}
        ],
  details:["En","Fn","10-Hours","Beginner Friendly"],
  price:500
};

ReactDOM.render(

  <React.StrictMode>
    <CourseDetail data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
