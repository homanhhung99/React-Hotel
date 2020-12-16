import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="banner-contact">
    <span>CONTACT</span>
  </div>
  <div className="from-contact">
    <div className="container" style={{height: '600px', color: '#828282'}}>
      <div className="row">
        <div className="col-md-6">
          <h3>Drop us a lint</h3>
          <div className="content">
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in dolor pharetra, a euismod nulla dignissim.
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Email adress" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Messege</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-info sendnow">SEND NOW</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <iframe style={{height: '300px', width: '100%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4999995318767!2d151.20599611509084!3d-33.87677452690392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d0ff0c3fd%3A0x15cb90387b33b7ca!2sShark%20Hotel!5e0!3m2!1svi!2s!4v1606791830223!5m2!1svi!2s" width={600} height={450} frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />						</div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="address">
                    <span className="left">Address :</span>
                    <span className="right">Avenue 234</span>
                  </div>
                  <div className="address">
                    <span className="left">City :</span>
                    <span className="right">Ha Dong, Ha Noi</span>
                  </div>
                  <div className="address">
                    <span className="left">Check-In :</span>
                    <span className="right">KMA</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="address">
                    <span className="left">Phone :</span>
                    <span className="right">00 837920234</span>
                  </div>
                  <div className="address">
                    <span className="left">Email :</span>
                    <span className="right">info@hotel.com</span>
                  </div>
                  <div className="address">
                    <span className="left">Check-Out :</span>
                    <span className="right">Avenue 234</span>
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

export default Contact;
