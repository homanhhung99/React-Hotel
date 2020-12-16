import React, { Component } from 'react';

class Admin_employees extends Component {
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
          <table style={{width: '100%'}}>
            <tbody><tr>
                <th>ID</th>
                <th style={{width: '200px'}}>Name</th> 
                <th>Date</th>
                <th>Sex</th>
                <th>Address</th>
                <th>position</th>
                <th>Date start work</th>
                <th>Salary</th>
                <th>Control</th>
              </tr>
              <tr>
                <td>A201</td>
                <td>Smith</td>
                <td>50</td>
                <td>Man</td>
                <td>Smith</td>
                <td>50</td>
                <td>20/12/2020</td>
                <td>Smith</td>
                <td>
                  <div className="delete"><i className="fas fa-trash-alt" /> Delete</div>
                  <div className="Repair"><i className="fas fa-tools" /> Repair</div>
                </td>
              </tr>
              <tr>
                <td>A201</td>
                <td>Smith</td>
                <td>50</td>
                <td>Man</td>
                <td>Smith</td>
                <td>50</td>
                <td>20/12/2020</td>
                <td>Smith</td>
                <td>
                  <div className="delete"><i className="fas fa-trash-alt" /> Delete</div>
                  <div className="Repair"><i className="fas fa-tools" /> Repair</div>
                </td>
              </tr>
            </tbody></table>
        </div>
        <div className="col-md-2">
          <div className="add-employees"><i className="fas fa-user-plus" /> Add Employees</div>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Admin_employees;
