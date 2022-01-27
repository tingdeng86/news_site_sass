import React from 'react';
import { getYear } from '../utilities/utilities';
const Footer = () => {
    return (
        <footer>
            <p>&copy; {getYear()} Ting Deng from SSD.</p>
        </footer>
    )

}


export default Footer;
