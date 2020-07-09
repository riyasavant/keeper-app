import React from 'react';

const date = new Date();

function Footer() {
    return <div className="footer"><p>Copyright {date.getFullYear()}</p></div>
}

export default Footer;