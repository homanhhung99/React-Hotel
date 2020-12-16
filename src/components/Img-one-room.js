import React, { Component } from 'react';
class Img_one_room extends Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div className="img-one-room">
                <div className="shadow-box-room" />
                <div className="square" />
                <img src={this.props.image} alt="" />
                <div id="detail-room">{this.props.type}</div>
                <div className="infor-room">
                <span className="cts"><i className="far fa-user-circle" /><span id="value-ps">{this.props.guest}</span> GUESTS</span>
                <span className="cts"><i className="fab fa-houzz" /><span id="value-ft">{this.props.ft}</span> FT</span>
                <span className="cts"><i className="far fa-star" /></span> <span style={{color: 'white'}}>FROM:</span><span style={{color: 'white'}} id="value-money">{this.props.price}</span><span style={{color: 'white'}}>$</span>
                </div>
          </div>
        );
    }
}

export default Img_one_room;
