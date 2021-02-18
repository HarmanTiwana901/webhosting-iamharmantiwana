import React from 'react';
import './WhyUs.css';

class WhyUs extends React.Component {
    render() {
        return (
            <div id="whyus-wrapper">
                <div id="whyus-content-container">
                    <h3 id="wu-subheading">Lorem ipsum dolor sit amet, consec </h3>
                    <h1 id="wu-heading">Lorem ipsum dolor sit amet ?</h1>

                    <div id="wu-reasons-grid-container">
                        <div id="wu-sec-1" className="wu-section">
                            <p className="wu-desc">
                                Lorem ipsum dolor sits dolor Lorem asdasd aasdasda as odio,<br></br> semper ac aliquam in, consectetur eu diam.<br></br> pellentesque
                                
                            </p>
                        </div>
                        <div id="wu-sec-2" className="wu-section">
                            <p className="wu-desc">
                                Lorem ipsum dolor  adipiscin Lorem asdasd aasdasda asg elit. Cras dolor odio,<br></br> semper ac aliquam in, consectetur eu diam.<br></br> pellentesque
                            </p>
                        </div>
                        <div id="wu-sec-3" id="wu-section-bottom" className="wu-section bottom">
                            <p className="wu-desc">
                                Lorem ipsum dolor sit amet, . C Lorem asdasd aasdasda asras dolor odio,<br></br> semper ac aliquam in, consectetur eu diam. <br></br> pellentesque
                            </p>
                        </div>
                        <div id="wu-section-bottom-hidden" className="wu-section bottom">
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default WhyUs;