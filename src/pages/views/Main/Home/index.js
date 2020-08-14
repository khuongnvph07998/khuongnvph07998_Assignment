import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Home = ({products}) => {
    return (
        <div>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="#">Adidas</a></li>
                                    <li><a href="#">Rolex</a></li>
                                    <li><a href="#">Audemars Piguet</a></li>
                                    <li><a href="#">Hublot</a></li>
                                    <li><a href="#">Richard Mille</a></li>
                                    <li><a href="#">Franck Muller</a></li>
                                    <li><a href="#">Patek Philippe</a></li>
                                    <li><a href="#">Patek Philippe</a></li>
                                    <li><a href="#">Jacob&amp;Co</a></li>
                                    <li><a href="#">Chanel</a></li>
                                    <li><a href="#">Zenith</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/slide1.jpg" id="anh" />
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories">
                <div className="container">
                    <div className="row" style={{ float: 'left' }}>
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ width: '200px' }}>
                                    <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-300x300.jpg"></img>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ float: 'left' }}>
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ width: '200px' }}>
                                    <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-300x300.jpg"></img>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ float: 'left' }}>
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ width: '200px' }}>
                                    <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-300x300.jpg"></img>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ float: 'left' }}>
                        <div className="categories__slider owl-carousel">
                            <div className="col-lg-3">
                                <div className="categories__item set-bg" style={{ width: '200px' }}>
                                    <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dich-vu-khac-laser-len-dong-ho-deo-tay-theo-yeu-cau-600x600-300x300.jpg"></img>
                                    <h5><a href="#">drink fruits</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured spad">
                <div className="container" style={{ float: 'left' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Product New</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {products.map(({ id, name, image, salePrice, price }, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg>
                                        <div align="center"><Link to={"/product/" + id}><img src={image} alt="" style={{ width: '180px' }} /></Link></div>
                                        <ul className="featured__item__pic__hover">
                                            <li><a href="#"><i className="fa fa-heart" /></a></li>
                                            <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                            <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><Link to={"/product/" + id}>{name}</Link></h6>
                                        <p><del>{salePrice}</del>đ</p>
                                        <p>{price}đ</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="img/banner/3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="latest-product spad">
                <div className="container" style={{ float: 'left' }}>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Latest Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">

                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/2.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/3.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/3.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Top Rated Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/1.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/2.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/3.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="latest-product__text">
                                <h4>Review Products</h4>
                                <div className="latest-product__slider owl-carousel">
                                    <div className="latest-prdouct__slider__item">
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/1.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/2.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                        <a href="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <div style={{ width: '100px' }}><img src="img/latest-product/3.jpg" alt="" /></div>
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>Crab Pool Security</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="from-blog spad">
                <div className="container" style={{ float: 'left' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/1.jpg" alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">Cooking tips make cooking simple</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/2.jpg" alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic">
                                    <img src="img/blog/3.jpg" alt="" />
                                </div>
                                <div className="blog__item__text">
                                    <ul>
                                        <li><i className="fa fa-calendar-o" /> May 4,2019</li>
                                        <li><i className="fa fa-comment-o" /> 5</li>
                                    </ul>
                                    <h5><a href="#">Visit the clean farm in the US</a></h5>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

Home.propTypes = {

}

export default Home
