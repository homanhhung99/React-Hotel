import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
  <div className="top">
    <div className="container" style={{height: 0}}>
      <div className="row">
        <div className="col-sm-3">
          <p>Main Contacts :</p>
          <div className="content-footer">
            <a href>
              <div>
                Asburd 14 ( Miami )
              </div>
            </a>
            <a href>
              <div>
                info@resort.com
              </div>
            </a>
            <a href>
              <div>
                +23 3453776547
              </div>
            </a>
            <a href>
              <div>
                Reception 24 H
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-3">
          <p>Site Links</p>
          <div className="content-footer">
            <a href>
              <div>
                ABOUT US
              </div>
            </a>
            <a href>
              <div>
                OUR SERVICES
              </div>
            </a>
            <a href>
              <div>
                OUR ROOMS
              </div>
            </a>
            <a href>
              <div>
                PAYMENTS
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <p>Newsletter</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn" type="button" id="button-addon2">Button</button>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <p>Social :</p>
              <i className="icon-header fab fa-facebook-f" />
              <i className="icon-header fab fa-twitter" />
              <i className="icon-header fab fa-pinterest-square" />
            </div>
            <div className="col-sm-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="end">
    <div className="container" style={{height: 0}}>
      <div className="row">
        <div className="col-sm-6">Terms of Use · Privacy Policy</div>
        <div className="col-sm-3">Copyright 2020 homanhhung.com</div>
        <div className="col-sm-3">
          <img src="image/cards.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Footer;
