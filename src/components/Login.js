import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Login = (props)=>{
const {email,setEmail,password,setPassword,handleLogin,emailError,passwordError} = props
console.log(props);
  return(
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
                          <input type="email" name="email" className="form-control" required value={email} onChange={e =>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          <p className="errorMsg">{emailError}</p>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" name="passWord" className="form-control" required value={password} onChange={e =>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                          <p className="errorMsg">{passwordError}</p>
                        </div>
                        <button onClick={handleLogin} style={{width: '100%', marginTop: '30px'}} type="submit" className="btn btn-info sendnow">Login</button>
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
  )
}

export default Login;
