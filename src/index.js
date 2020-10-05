import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

// Component: Which is a function
const App = (props) => {
    return (
        <h2 className='text-center' style={{color}}>
            {props.headerMessage}
        </h2>
    );
};

ReactDOM.render(
    // Top level component is usually App component as if it was a regular html
    // Think of HTML components as built in component
    // react extends our capabilities of HTML elements
    // Also, reusable.
    // lets say we have our custom prop headerMessage that can 
    // be passed to the component above via the props parameter

    <App headerMessage='Hello props!'/>, 

    // render using getElementById which is a DOM API
    document.getElementById('root')
);