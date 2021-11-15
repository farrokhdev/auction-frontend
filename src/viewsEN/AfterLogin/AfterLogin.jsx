import React from 'react'
import { Link } from 'react-router-dom';
import HeaderEN from '../../componentsEN/HeaderEN';
import LastAuctions from './LastAuctions';
import LastProducts from './LastProducts';
import LastProductsAuctionSlider from './LastProductsAuctionSlider';
import Footer from "../../componentsEN/Footer"
import pic8 from '../../imgEN/pic8.jpg';
import pic9 from '../../imgEN/pic9.jpg';
import pic10 from '../../imgEN/pic10.jpg';


function AfterLogin() {
    return (
        <>
            <HeaderEN boxShadow={{ boxShadow: " none" }}/>
            <main>
                <div className="container containercs ">
                    <LastProductsAuctionSlider />
                    <section className="Categorized-artworks">
                        <div className="container innercontainer">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <div className="main-title">
                                        <h2 className="default titr">Latest Artworks</h2>
                                        <Link to="/" className="btn-view">View all</Link>
                                    </div>
                                </div>
                            </div>
                            <LastProducts />
                        </div>
                    </section>
                </div>
                <div className="container-fluid">
                    <section className="latest-auction">
                        <div className="row">
                            <div className="col">
                                <div className="main-title">
                                    <h2 className="default titr">Latest Auctions</h2>
                                    <Link to="/" className="btn-view">View all</Link>
                                </div>
                            </div>
                        </div>
                        <LastAuctions />
                    </section>
                </div>
                <div className="container containercs ">
                    <section className="latest-articles">
                        <div className="container innercontainer">
                            <div className="row">
                                <div className="col">
                                    <div className="main-title">
                                        <h2 className="default titr">Latest Articles</h2>
                                        <Link to="/" className="btn-view">View all</Link>
                                    </div>
                                </div>
                            </div>
                            <div id="latest-articles" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <div className="bg-shadow tl-shadow20">
                                                    <img src={pic8} className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-caption ">
                                                    <span className="showdate">12 May 2019</span>
                                                    <h5 className="default">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                        sed
                                                        diam nonummy nibh </h5>
                                                    <p className="d-sm-none d-lg-block">Delve into our world of unique and amazing finds
                                                        from the comfort of your sofa -
                                                        that perfect piece is just waiting for you.</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <div className="bg-shadow tl-shadow20">
                                                    <img src={pic9} className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-caption ">
                                                    <span className="showdate">12 May 2019</span>
                                                    <h5 className="default">Consectetuer adipiscing elit, sed diam nonummy nibh </h5>
                                                    <p className="d-sm-none d-lg-block">that perfect piece is just waiting for you,
                                                        Delve
                                                        into our world of unique and
                                                        amazing finds from the comfort of your sofa.</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="bg-shadow tl-shadow20">
                                                    <img src={pic10} className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-caption ">
                                                    <span className="showdate">12 May 2019</span>
                                                    <h5 className="default">Sed diam nonummy nibh </h5>
                                                    <p className="d-sm-none d-lg-block">Unique and amazing finds from the comfort of
                                                        your
                                                        sofa -
                                                        that perfect piece is just waiting for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 ">
                                        <div className="carousel-controls">
                                            <button className="carousel-control-prev" type="button"
                                                data-bs-target="#latest-articles" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <div className="carousel-number-indicator">
                                                <span className="now-slide">00</span>
                                                <span className="all-slide">05</span>
                                            </div>
                                            <button className="carousel-control-next" type="button"
                                                data-bs-target="#latest-articles" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row flex-row-reverse ">
                                    <div className="col-lg-6">
                                        <div className="carousel-indicators">
                                            <div className="row position-relative">
                                                <div className="col-4">
                                                    <img src={pic8} alt="" data-bs-target="#latest-articles"
                                                        data-bs-slide-to="0" className="active max-width-180"
                                                        aria-current="true" aria-label="Slide 1" />
                                                </div>
                                                <div className="col-4">
                                                    <img src={pic9} alt="" width="500" height="390"
                                                        data-bs-target="#latest-articles" data-bs-slide-to="1"
                                                        className="max-width-180"
                                                        aria-label="Slide 2" />
                                                </div>
                                                <div className="col-4">
                                                    <img src={pic10} alt="" width="500" height="390"
                                                        data-bs-target="#latest-articles" data-bs-slide-to="2"
                                                        className="max-width-180"
                                                        aria-label="Slide 3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about">
                        <div className="container innercontainer">
                            <div className="row">
                                <div className="col">
                                    <div className="main-title small">
                                        <h2 className="default titr">About US</h2>
                                        <Link to="/" className="btn-view">More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content-box">
                                        <div className="row">
                                            <div className="col-sm-8 ">
                                                <h4 className="default">Arthibition Supports Art Lovers</h4>
                                                <p className="">
                                                    Art is a supreme way to express ourselves,v be creative, relieve stress and just
                                                    enjoy
                                                    ourselves, so it is a shame when you see how much talent there is that remains
                                                    untapped due
                                                    to lack of proper opportunity. Arthibition has decided to create that chance for
                                                    the
                                                    art
                                                    lovers to shine in different fields of visual arts.
                                                </p>
                                            </div>
                                            <div className="col-sm-4 d-none d-sm-block">
                                                <ul className="vertical-menu">
                                                    <li><Link to="/">Term of us</Link></li>
                                                    <li><Link to="/">Privacy</Link></li>
                                                    <li><Link to="/">Work with us</Link></li>
                                                    <li><Link to="/">FAQ</Link></li>
                                                    <li><Link to="/">Contact us</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-box newsletter">
                                        <div className="main-title">
                                            <h2 className="default titr">Subscribe Now!!</h2>
                                            <span className="btn-view">To be updated with all the latest auctions.</span>
                                            <div className="input-group-cs">
                                                <input className="white" placeholder="Enter your Email ..." />
                                                <button type="button" className="btn-input">Subscribe</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AfterLogin;