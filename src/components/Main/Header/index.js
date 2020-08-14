import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                                    <li><i className="fa fa-envelope" /> SĐT: 0987654321</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
