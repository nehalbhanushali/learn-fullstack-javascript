import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

const App = (props) => {
    return (
        <h2 className='text-center'> 
            {props.headerMessage}
        </h2>
    );
};

// The props might need to be added to some kind of validation
// did not get the linting error like in the video because it is 
// probably covered in newer dependency versions
App.propTypes = {
    // React.PropTypes has moved into a different package since React v15.5. 
    // Please use the prop-types library instead.
    // We provide a codemod script to automate the conversion.
    // headerMessage: React.PropTypes.string
    headerMessage: PropTypes.string.isRequired,
};

ReactDOM.render(
    // Theese should give warning in console
    // <App headerMessage={4}/>, // for having wrong propType
    // <App />, // for not having a proptype even though it is marked required
    
    <App headerMessage='Hello props!'/>, 
    document.getElementById('root')
);