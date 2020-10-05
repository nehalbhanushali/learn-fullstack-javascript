import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

// Component: Which is a function
const App = () => {
    return (
        // <h2 style={{color: color}}></h2>
        // similar to html except certain things like className instead of class
        // TODO: use components
        <h2 className='text-center' style={{color}}>
            Hello React with JSX via component!
        </h2>
    );
};

ReactDOM.render(
    // Top level component is usually App component
    <App />,

    // render using getElementById which is a DOM API
    document.getElementById('root')
);