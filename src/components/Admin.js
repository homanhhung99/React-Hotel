import React, { Component } from 'react';

class Admin extends Component {
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
                        <div className="card-admin">
                            <div className="body-admin">
                            <div className="icon-admin"><i className="fa fa-user" /> </div>
                            <div className="content">
                                <div className="text">New Employee</div>
                                <h5 className="number">22</h5>
                            </div>
                            <hr />
                            <div className="icon-admin"><i className="fa fa-users" /> </div>
                            <div className="content">
                                <div className="text">Total Employee</div>
                                <h5 className="number">425</h5>
                            </div>
                            </div>
                        </div>
                        <div className="card-admin">
                            <div className="body-admin">
                            <div className="icon-admin"><i className="fa fa-university" /> </div>
                            <div className="content">
                                <div className="text">Total Salary</div>
                                <h5 className="number">$2.8M</h5>
                            </div>
                            <hr />
                            <div className="icon-admin"><i className="fa fa-university" /> </div>
                            <div className="content">
                                <div className="text">Avg. Salary</div>
                                <h5 className="number">$1,250</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8">
                        <div id="columnchart_material" style={{width: '800px', height: '500px'}} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Admin;
