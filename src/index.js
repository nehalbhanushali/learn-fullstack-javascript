import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    // <h2 style={{color: color}}></h2>
    // similar to html except certain things like className instead of class
    <h2 className='text-center' style={{color}}>
        Hello React with JSX!
    </h2>,

    // render using getElementById which is a DOM API
    document.getElementById('root')
);