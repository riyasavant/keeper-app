import React from 'react';

const date = new Date();

function Footer() {
    return <p className="footer">Copyright {date.getFullYear()}</p>
}

export default Footer;