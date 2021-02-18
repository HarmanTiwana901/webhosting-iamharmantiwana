import React from 'react';
import './Features.css';

import dollar from './images/dollar.png';
import idea from './images/idea.png';
import light from './images/light.png';

class Features extends React.Component {
    render() {
        return (
            <div id="features-wrapper">
               <div className="feature-container">
                    <img height="65px" src={dollar}/>
                    <h1>
                        Lorem ipsum
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consec in, consectetur eu diam. Duis justo dui, viverra pellenttesque
                    </p>
                    <h4>01</h4>
                </div>
                <div className="feature-container">
                    <img height="65px" src={idea}/>
                    <h1>
                        Lorem ipsum
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consec in, consectetur eu diam. Duis justo dui, viverra pellenttesque
                    </p>
                    <h4>02</h4>
                </div>
                <div className="feature-container">
                    <img height="65px" src={light}/>
                    <h1>
                        Lorem ipsum
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consec in, consectetur eu diam. Duis justo dui, viverra pellenttesque
                    </p>
                    <h4>03</h4>
                </div>
            </div>
        );
    }
}

export default Features;