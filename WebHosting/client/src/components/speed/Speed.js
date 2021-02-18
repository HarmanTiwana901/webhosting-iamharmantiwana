import React from 'react';
import './Speed.css';

import CPU from './images/cpu.png';

class Speed extends React.Component {
    render() {
        return (
            <div id="speed-wrapper">
                <div id="speed-container">
                    <div id="l-speed-container">
                        <h1>Lorem ipsum dolor sit ame</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consec in, consectetur eu diam. Duis justo dui, viverra pellenttesque<br></br>  Lorem ipsum dolor sit amesque
                        </p>
                        
                        <button id="explore-btn">Explore</button>
                    </div>
                    <div id="r-speed-container">
                        <img src={CPU} height="300px" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Speed;