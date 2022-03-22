import React from 'react';
import '../css/Logo.css';

function Logo(props){
    return(
        <img className='freecodecamp-logo' alt='logo freeCodeCamp' src={props.logo}/>
    );
}

export default Logo;