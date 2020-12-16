import React, { Component } from 'react';
// import './../css/body.css'
class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="center-parent">
                    <div className="waves-fill">
                        <div className="water">
                        <span className="shark" />
                        <span className="wave" />
                        <span className="deep-water" />
                        </div>	
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
