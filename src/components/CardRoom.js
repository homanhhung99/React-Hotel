import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

class CardRoom extends Component {
  
     constructor(props) {
        super(props);
        
    }
    to_slug = (str)=>
    {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }
    render() {
        return (
            <div className="card card-room" style={{width: '21rem'}}>
            <div className="top">
              <div className="name-room-view">{this.props.nameRoom}</div>
              <img className="img-room-view card-img-top" src={this.props.image} alt="" />
            </div>
            <div className="card-body">
              <div className="title-room">{this.props.type}</div>
              <div className="infor-room-view">
                <span className="cts"><i className="far fa-user-circle" /><span id="value-ps">{this.props.guest}</span> GUESTS</span>
                <span className="cts"><i className="fab fa-houzz" /><span id="value-ft">{this.props.ft}</span> FT</span>
              </div>
              <div className="contents-room-view">{this.props.content}</div>
              <div className="book-now-view">BOOK NOW FOR {this.props.price}</div>
              <div className="servises-view">
                <div className="icon-view">
                  <img src="image/icon/icon-10.png" alt="" />
                  <img src="image/icon/icon-11.png" alt="" />
                  <img src="image/icon/icon-12.png" alt="" />
                  <img src="image/icon/icon-13.png" alt="" />
                </div>
                <Link to={"/rooms/"+this.to_slug(this.props.nameRoom)+"."+this.props.id+".html" } className="full-view">FULL INFOR <i className="fas fa-chevron-right" /></Link>
              </div>
            </div>
          </div>
        );
    }
}


export default CardRoom; 
