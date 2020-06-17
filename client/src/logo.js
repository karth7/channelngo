import React from 'react';
//import Tilt from 'react-tilt';
import brain from './logo.png';
import { findByLabelText } from '@testing-library/react';
const Logo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >

            <div><img src={brain}></img> </div>

        </div>


    );
}
export default Logo;