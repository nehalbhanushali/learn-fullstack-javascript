import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

const App = (props) => {
    return (
        // TODO: components composability
        <h2 className='text-center'> 
            {props.headerMessage}
        </h2>
    );
};

// The props might need to be added to some kind of validation
// did not get the linting error like in the video because it is 
// probably covered in newer dependency versions
App.propTypes = {
    headerMessage: PropTypes.string,
};

App.defaultProps = {
    headerMessage: "Hello!!",
};

ReactDOM.render(
    // This will use defaultProps
    <App />,
    // <App headerMessage='Hello props!'/>, 
    document.getElementById('root')
);