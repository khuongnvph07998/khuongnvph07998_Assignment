import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Sidebar = props => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars" /></button>
            </nav>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <Link className="nav-link" to="/">
                            <div className="sb-nav-link-icon"></div>Home
                        </Link>
                        <Link className="nav-link" to="/admin">
                            <div className="sb-nav-link-icon"></div>Dashboard
                        </Link>
                        <Link class="nav-link collapsed" to="/admin/cate" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"></div>Categories
                        </Link>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div>

                        <Link className="nav-link" to="/admin/products">
                            <div className="sb-nav-link-icon"></div>Product
                        </Link>
                        <Link className="nav-link" to="/admin/add">
                            <div className="sb-nav-link-icon"></div>AddProduct
                        </Link>
                        {/* <Link className="nav-link" to="/admin/setting">
                            <div className="sb-nav-link-icon"></div>Setting
                        </Link> */}
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>Start Bootstrap
                </div>
            </nav>
        </div>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
