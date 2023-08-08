import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{ maxWidth: '300px'}}>
            <Tilt>
                <div className='tilt br2 shadow-2'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', maxWidth: '300px'}}>
                    <img style={{paddingTop:'5px'}} alt='logo' src={brain}></img>
                </div>
            </Tilt>
        </div>    
        
    );
};


export default Logo;