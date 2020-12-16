import React, { Component } from 'react';
import DataRoom from './Data.json'
import user from './../image/icon/icon-user-grey.svg'
import plan from './../image/icon/icon-plan-grey.svg'
import calendar from './../image/icon/icon-calendar-grey.svg'
import bed from './../image/icon/icon-bed-grey.svg'

class Detail_room extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
            {
                DataRoom.map((value,key)=>{
                if(value.id === parseInt(this.props.match.params.id))
                {
                    return(
                        <div>
                            <div className="detail_room">
                                <div className="contents-detail">
                                <div className="selectContent sl1">DESCRIPTION</div>
                                <div className="selectContent sl2">ROOM SERVICES</div>
                                <div className="selectContent sl3">AROUND THE HOTEL</div>
                                <div className="selectContent sl4">SIMILAR ROOMS</div>
                                </div>
                                <div className="price-detail">
                                <span>{value.price}$</span>
                                <small>/PER NIGHT</small>
                                </div>
                            </div>
                            <div className="container">
                                <h2 className="title-detail">{value.type}</h2>
                                <small>HOTEL ROME</small>
                                <div className="row">
                                <div className="col-md-8">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" style={{height: '375px'}}>
                                        <div className="carousel-item active">
                                        <img className="d-block w-100" src={value.imageDeteil[0]} alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src={value.imageDeteil[1]} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src={value.imageDeteil[2]} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>
                                    <div className="icon-detail-services">
                                    <div className="roww">
                                        <div className="onebox">
                                        <img src={user} alt="" />
                                        <div>{value.personMax} GUESTS</div>
                                        </div>
                                        <div className="onebox">
                                        <img src={plan} alt="" />
                                        <div>{value.ft} ft</div>
                                        </div>
                                        <div className="onebox">
                                        <img src={bed} alt="" />
                                        <div>{value.price} $ / PER NIGHT</div>
                                        </div>
                                        <div className="onebox">
                                        <img src={calendar} alt="" />
                                        <div>WEEK PRICE</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="all-contents-detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl. Duis ac mi leo. Mauris at convallis erat. Aliquam interdum semper luctus. Aenean ex tellus, gravida ut rutrum dignissim, malesuada vitae nulla. Sed viverra, nisl dapibus lobortis porttitor, risus risus dictum risus, sed rhoncus orci urna dignissim leo. Cras id nunc nulla. Aliquam a tortor fermentum, finibus elit ac, dictum purus. Nulla mollis ex interdum commodo luctus. In hac habitasse platea dictumst. Quisque vel rutrum ipsum. Praesent at imperdiet diam. Ut vel vulputate massa. Duis condimentum tincidunt tristique. Donec sollicitudin efficitur venenatis. Integer ex lectus, lobortis nec cursus ac, suscipit ut magna.
                                    </div>
                                    <div className="room-services-detail">
                                    <h5 className="title-detail">Room Services</h5>
                                    <div className="row">
                                        <div className="onebox">
                                        <img src="image/icon/icon-10.png" alt="" />
                                        <span>Swimming Pool</span>
                                        </div>
                                        <div className="onebox">
                                        <img src="image/icon/icon-11.png" alt="" />
                                        <span>Television</span>
                                        </div>
                                        <div className="onebox">
                                        <img src="image/icon/icon-12.png" alt="" />
                                        <span>No Smoking</span>
                                        </div>
                                        <div className="onebox">
                                        <img src="image/icon/icon-13.png" alt="" />
                                        <span>Private Bathroom</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="click-book-now">
                                    <form action>
                                        <div className="formdate">
                                        <label className="checkin">CHECK-IN</label><br />
                                        <input type="date" required defaultValue="2020-02-09" />
                                        </div>
                                        <div className="formdate">
                                        <label className="checkin">CHECK-OUT</label> <br />
                                        <input type="date" required defaultValue="2020-02-10" />
                                        </div>
                                    </form>
                                    <div className="bottom-book-now">
                                        <div className="infor-ps-room">
                                        <div>Guests</div>
                                        <input type="number" defaultValue={1} />
                                        </div>
                                        <div className="nights">
                                        <div>NIGHTS</div>
                                        <input type="number" defaultValue={1} />
                                        </div>
                                    </div>
                                    <span>BOOK NOW</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                                        
                        )
                    }
                })               
            }
            </div>
        );
    }
}

export default Detail_room;
