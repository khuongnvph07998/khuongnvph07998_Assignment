import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <div>

      {/* Header Section Begin */}<br></br>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo" style={{ float: 'left' }}>
                <a to=""><img src="http://localhost/ogani/img/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-6" style={{ float: 'left' }}>
              <nav className="header__menu" style={{ float: 'left' }}>
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="#">Shop</Link></li>
                  <li><Link to="#">Login</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  {/* <li><a to="#"><i class="fa fa-heart"></i> <span>1</span></a></li> */}
                  <li><a to="#"><i className="fa fa-shopping-bag" /></a></li>
                </ul>
                <div className="header__cart__price" />
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars" />
        </div>
      </header>
      {/* Header Section End */}

    </div>
  )
}