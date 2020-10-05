import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    // the following will give us a simple Object with properties including type(h2) and
    // props (-> children -> textContent)

    // React.createElement('h2', null, 'Hello React with createElement'),
    
    // VIRTUAL DOM
    // So in react we simply describe html as objects
    // and then react put them together in a tree and keep a copy of this tree in memory.
    // So when things change, react will re-calulate the tree and compares trees and takes 
    // to the browser only the difference.

    // JSX
    // Now above way of create element is inconvinient as compared to witing HTML
    <h3>Hello React with JSX! Thanks to Babel</h3>,

    // render using getElementById which is a DOM API
    document.getElementById('root')
)