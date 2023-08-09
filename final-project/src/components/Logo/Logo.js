import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{ maxHeight: '100px', maxWidth: '100px'}}>
            <Tilt>
                <div className='tilt br2 shadow-2'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', maxWidth: '100px'}}>
                    <img style={{paddingTop:'5px'}} alt='logo' src={brain}></img>
                </div>
            </Tilt>
        </div>    
        
    );
};


export default Logo;