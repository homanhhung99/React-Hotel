import React, { Component } from 'react';

class Admin_employees_add extends Component {
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
        <div className="col-md-10">
          <form>
            <div className="form-group row">
              <label htmlFor="inputid" className="col-sm-2 col-form-label">ID</label>
              <div className="col-sm-10">
                <input type="id" className="form-control" id="inputid" placeholder="ID" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="name" className="form-control" id="inputname" placeholder="Name" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputid" className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <input type="date" className="form-control" id="inputid" placeholder="Name" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Sex</label>
              <div className="col-sm-10">
                <select className="custom-select" id="validationCustom04" required>
                  <option selected disabled value>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputid" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10">
                <input type="id" className="form-control" id="inputid" placeholder="Address" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputid" className="col-sm-2 col-form-label">CMND</label>
              <div className="col-sm-10">
                <input type="id" className="form-control" id="inputid" placeholder="CMND" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">position</label>
              <div className="col-sm-10">
                <input type="name" className="form-control" id="inputname" placeholder="position" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputid" className="col-sm-2 col-form-label">Date start work</label>
              <div className="col-sm-10">
                <input type="id" className="form-control" id="inputid" placeholder="Date start work" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Salary</label>
              <div className="col-sm-10">
                <input type="name" className="form-control" id="inputname" placeholder="Salary" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Phone Number</label>
              <div className="col-sm-10">
                <input type="name" className="form-control" id="inputname" placeholder="Phone Number" />
              </div>
            </div>
            <div className="col-sm-12" style={{textAlign: 'center'}}>
              <button type="submit" className="btn btn-primary add-now">Add Now</button>
            </div>
          </form>
        </div>
        <div className="col-md-2">
          <div className="table-employees"><i className="far fa-address-card" /> Table Employees</div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Admin_employees_add;
