import React, { Component } from 'react';
import down from './../image/icon/down.png' ;
import CardRoom from './CardRoom';
import DataRoom from './Data.json'
class Rooms extends Component {
    render() {
        return (
            <div>
                <div class="banner-our-room">
                <span>OUR ROOMS</span>
              </div>
                <div className="container-list-rooms">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="a style-rooms" onclick="load()">Small Room</div>
                        <div className="a style-rooms" onclick="load(2);return false;">Big Room</div>
                        <div className="a style-rooms" onclick="load(3);return false;">Luxury Room</div>
                        <div className="a style-rooms" onclick="load(4);return false;">Vip Room</div>
                        <div className="contents-services">
                          <h3 className="tdbox">Services <img className="iconDownTop" src={down} alt="" /></h3>
                          <div className="list-services">
                            <div className="row">
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> King Beds
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Bike Rental
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Swimming Pool
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Television
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> No Smoking
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Welcome Drink
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Private Bathroom
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="contents-services">
                          <h3 className="tdbox">Extra Services <img className="iconDownTop" src={down} alt="" /></h3>
                          <div className="list-services">
                            <div className="row">
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Breakfast
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Laundry
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Beach Loungers
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Wifi
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Satellite TV
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Car Rental
                              </p>
                              <p className="checkbox-contents">
                                <input type="checkbox" name id /> Sea View
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="row">
                            {
                              DataRoom.map((value,key)=>{
                                return(
                                  <CardRoom  key={key} id={value.id} nameRoom={value.nameRoom} image={value.image} type={value.type} content={value.content} price={value.price}/>
                                )
                              })
                            }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Rooms;
