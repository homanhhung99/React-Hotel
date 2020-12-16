import React, { Component } from 'react';
import DataRooms from './Data.json'
import Img_one_room from './Img-one-room';
class Home extends Component {
    render() {
        return (
            <div>
  <div className="container-body">
    <div className="container-banner">
      <div className="animation-banner-text">
        <h1>SEA HOTEL</h1>
        <span>141 CHIEN THANG, HA DONG</span>
        <div className="tel">1900 669 968</div>
        <div className="star">_________________<img src='' alt="" />_________________</div>
        <div className>__________________________________</div>
        <div className="content">ROOM SUITES</div>
        <div className>__________________________________</div>
      </div>
      <div className="opacity-black" />
      <div className="screen-banner" />
      <div className="down-book-rooms"><i className="fas fa-chevron-down" /></div>
    </div>
    <div className="adress">
      <span className="left-adress"><b>ADDRESS :</b> 141 CHIEN THANG, HA DONG</span>
      <span className="right-adress"><b>EMAIL :</b> booking@sharkresort.com</span>
    </div>
    <div className="container ctn-room" style={{height: '600px'}}>
      <div className="opacity-black-rooms" />
      <div className="container-book-rooms" />
      <div className="content-marketing">
        <div className="contentbook left-rooms">
          <h1>Holiday</h1>
        </div>
        <div className="contentbook center-rooms">
          <h4 className="ct">BOOKING</h4>
          <h5 className="ct">SEARCH YOUR ROOM</h5>
          <form action>
            <p>
              <label htmlFor="email">####</label>
              <input type="text" name="email" placeholder="******" id="#" />
            </p>
            <div className="message-error" id="email-error" />
            <p>
              <label htmlFor="email">####</label>
              <input type="text" name="email" placeholder="******" id="#" />
            </p>
            <div className="message-error" id="email-error" />
            <p>
              <input type="submit" Value="BOOKNOW" id="sign-in-btn" />
            </p>
          </form>
        </div>
        <div className="contentbook right-rooms">
          <h1>Best Season Price</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="container-our-rooms">
    <div className="content-our">
      <span>OUR ROOM</span>
      <p>- PROMOTIONS -</p>
    </div>
    <div className="row">
    {
      DataRooms.map((value,key)=>{
        return(
          <Img_one_room image={value.image} type={value.type} ft={value.ft} price={value.price}/>
        )
      })
    }
    </div>
  </div>
  <div className="extra-services">
    <div className="shadow-box-extra" />
    <div className="container" style={{height: 0}}>
      <div className="row">
        <div className="col-md-6">
          <h1>Extra Services</h1>
          <div className="content-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae imperdiet lorem. Quisque sagittis, sem a mattis molestie, velit purus blandit neque
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae imperdiet lorem. Quisque sagittis, sem a mattis molestie, velit purus blandit neque
          </div>
          <div className="room-suites">ROOMS E SUITES</div>
        </div>
        <div className="basic col-md-3">
          <div className="all-content-basic">
            <div className="content-basic">
              BASIC
            </div>
            <div className="content-money">
              $ 49.99
            </div>
            <div className="perday">
              PER DAY					
            </div>
          </div>
          <div className="detail">
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div href className="read-more">READ MORE</div>
        </div>
        <div className="inclusive col-md-3">
          <div className="all-content-inclusive">
            <div className="content-inclusive">
              ALL INCLUSIVE
            </div>
            <div className="content-money" style={{color: 'white'}}>
              $ 99.99
            </div>
            <div className="perday" style={{color: 'white'}}>
              PER DAY					
            </div>
          </div>
          <div className="detail">
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div href className="read-more" style={{margin: '24%'}}>READ MORE</div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Home;
