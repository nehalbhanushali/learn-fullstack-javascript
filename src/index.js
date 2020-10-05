import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

// TODO : 
// did not get the linting error like in the video  for
// The props might need to be added to some kind of validation
// components not composed

// see the prop is de-structured
// TODO: install react extention on the browser
const Header = ({ message }) => {
    return (
        // Assign classNames matching component name
        <h2 className='Header text-center'> 
        {message}
        </h2>
    );
};

Header.propTypes = {
    message: PropTypes.string,
};

const App = () => {
    return (
        // Assign classNames matching component name
        <div className='App'>
       
         <Header message='Naming Contests' />

          ...
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);