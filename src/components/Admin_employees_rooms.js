import React, { Component } from 'react';

class Admin_employees_rooms extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="banner-our-room">
    <span>ADMIN</span>
  </div>
  <div className="container-admin">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="a style-rooms" onclick="load()">Small Room</div>
          <div className="a style-rooms" onclick="load(2);return false;">Big Room</div>
          <div className="a style-rooms" onclick="load(3);return false;">Luxury Room</div>
          <div className="a style-rooms" onclick="load(4);return false;">Vip Room</div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="card mb-3" style={{maxWidth: '600px'}}>
              <div className="content-customer-infor">
                <div className="avartar" />
                <div className="service">
                  <img src="image/avatar/anh-avatar-dep.jpg" alt="" />
                  <div className="status-avatar">
                    <p>Name : Ho Manh Hung</p>
                    <p>Sex : Male</p>
                    <p>Address: Ha Dong, Ha Noi</p>
                    <p>Phone Number: +84612554623</p>
                    <p>Email: hung.homanh.14@gmail.com</p>
                  </div>
                  <div className="close-box">X</div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src="image/our-rooms/1.jpg" style={{width: '100%', height: '100%'}} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Name: Canvas Room</h5>
                    <p className="card-text">ID: SHK011993</p>
                    <p className="card-text">Number: 011993</p>
                    <p className="card-text">FT: 15</p>
                    <p className="card-text">Price: 15$</p>
                    <div className="status-all">
                      <div className="information-customer">Infor</div>
                      <div className="status">Ordered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3" style={{maxWidth: '600px'}}>
              <div className="row no-gutters">
                <div className="col-md-6">
                  <img src="image/our-rooms/2.jpg" style={{width: '100%', height: '100%'}} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Name:Silium Room</h5>
                    <p className="card-text">ID:SHK011993</p>
                    <p className="card-text">Number:011993</p>
                    <p className="card-text">FT:15</p>
                    <p className="card-text">Price:15$</p>
                    <div className="status-all">
                      <div className="information-customer">Infor</div>
                      <div className="status Empty">Empty room</div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Admin_employees_rooms;
