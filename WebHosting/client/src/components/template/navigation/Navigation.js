import React from 'react';
import './Navigation.css';

import MenuIcon from './images/menu.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.bar1 = React.createRef();
        this.bar2 = React.createRef();
        this.bar3 = React.createRef();

        this.revealNav = React.createRef();
        this.revealLinksWrap = React.createRef();
        this.revealLink = React.createRef();
        this.revealBtnJoin = React.createRef();
        this.revealBtnCPanel = React.createRef();

        this.handleAnimation = this.handleAnimation.bind(this);
    }
    handleAnimation(e) {
        this.bar1.current.classList.toggle("change");
        this.bar2.current.classList.toggle("change");
        this.bar3.current.classList.toggle("change");

        this.revealNav.current.classList.toggle("showNav");
        this.revealLinksWrap.current.classList.toggle("show");
        this.revealLink.current.classList.toggle("show");
        this.revealBtnJoin.current.classList.toggle("btnshowj");
        this.revealBtnCPanel.current.classList.toggle("btnshowc");
    }
    
    render() {
        return (
            <div>
                <div id="subnavigation-wrapper">
                    <div id="subnav-links">
                        <a className="sn-link">Privacy</a>
                        <a className="sn-link">Resources</a>
                        <a className="sn-link">Cookies</a>
                        <a className="sn-link">API</a>
                        <a className="sn-link">EN</a>
                    </div>
                </div>
                 <div id="navigation-wrapper">
                
                    <div id="links-container">
                        <div id="nav-icon" onClick={this.handleAnimation} className="hidden">
                            <div ref={this.bar1} id="bar1"></div>
                            <div ref={this.bar2} id="bar2"></div>
                            <div ref={this.bar3} id="bar3"></div>
                        </div>
                        
                        <a id="hosting" href="#">Hosting</a>
                        <a className="link-pad" >About Us</a>
                        <a className="link-pad" >Testimonials</a>
                        <a className="link-pad" >Affiliates</a>
                        <a className="link-pad" >Learn More</a>
                    </div>
                    <div id="button-container">
                        <button id="join-btn">Join Us</button>
                        <button id="cpanel-btn">cPanel Login</button>
                    </div>

                    <div ref={this.revealNav} id="nav-content-hidden">
                        <div ref={this.revealLinksWrap} id="subnav-links-hidden">
                            <a ref={this.revealLink} className="link-hidden" href="#">Hosting</a>
                            <a ref={this.revealLink} className="link-hidden" >About Us</a>
                            <a ref={this.revealLink} className="link-hidden" >Testimonials</a>
                            <a ref={this.revealLink} className="link-hidden" >Affiliates</a>
                            <a ref={this.revealLink} className="link-hidden">Learn More</a>
                        </div>
                        <div id="subnav-btn-hidden">
                            <button ref={this.revealBtnJoin} id="join-btn-hidden">Join Us</button>
                            <button ref={this.revealBtnCPanel} id="cpanel-btn-hidden">cPanel Login</button>
                            
                        </div>
                    </div>
                </div>
            </div>

    

        );
    }
}

export default Navigation;