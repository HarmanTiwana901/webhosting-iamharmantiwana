import React from 'react';
import './Graph.css';

import GraphIMG from './images/graph.png';

class Graph extends React.Component {
    render() {
        return (
            <div id="graph-wrapper">
                <div id="graph-container">
                    <div id="l-graph-wrapper">
                        <img src={GraphIMG} height="329px" />
                    </div>
                    <div id="r-graph-wrapper">
                        <h1>Lorem ipsum dolor sit ame</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consec in, consectetur eu diam<span id="hidden">. Duis justo dui, viverra pellenttesque  Lorem ipsum dolor sit amesque</span>
                        </p>
                        <button id="learnmore-btn">Learn More</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Graph; 