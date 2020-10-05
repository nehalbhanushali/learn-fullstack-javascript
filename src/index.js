import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement('h2', null, 'Hello React'),
    // render using getElementById which is a DOM API
    document.getElementById('root')
)