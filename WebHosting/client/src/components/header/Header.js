import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="header-wrapper">
                <div id="header-content-container">
                    <h1 id="header-title">Premium Web Hosting For Your Business</h1>
                    <p id="header-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit augue eget ultrices facilisis.<br></br> 
                        Maecenas at arcu nec metus ultricies pulvinar
                    </p>
                    <button id="header-btn" type="button">View Plans</button>
                </div>
            </div>
        );
    }
}

export default Header;  