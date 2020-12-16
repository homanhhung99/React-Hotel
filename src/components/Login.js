import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class login extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="banner-our-room">
    <span>ACCOUNT</span>
  </div>
  <div className="form-accout">
    <div className="container" style={{marginBottom: '20px'}}>
      <div className="row">
        <div className="col-md-6 form-login">
          <h3>
            ALREADY A MEMBER
          </h3>
          <h4>Log In</h4>
          <form id="form-sign-in">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" name="passWord" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button style={{width: '100%', marginTop: '30px'}} type="submit" className="btn btn-info sendnow">Login</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 content-regis">
              <h5>Not Not Registered?</h5>
              <Link to="/register">
              <div className="Registere">Registere</div>
              </Link>
            </div>
            {/* <div class="col-md-12 content-regis">
							<div class="cta">Quick registration with</div>
						</div> */}
            <div className="col-md-12 content-regis">
              <div className="login-face"><i className="fab fa-facebook-square" aria-hidden="true" /> Facebook</div>
            </div>
            <div className="col-md-12 content-regis">
              <div className="login-gmail"><i className="fab fa-google" /> Gmail</div>
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

export default login;
