import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn){ // Boolean('false') is always true trick
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
            </nav>
            )
        } else {
            return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('Signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
            );
        }
}

export default Navigation;