import React from 'react'

function Search() {
    return (
        <>
            <div class="inner-nav" id="nav-search" aria-labelledby="#navsearch">
                <div class="container containercs">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="main-search">
                                <input placeholder="Search artworks, auctions, auctions home ...." />
                                <button type="button" class="btn btn-view">Advance</button>
                            </div>
                        </div>
                    </div>
                    <div class="row mrgt30">
                        <div class="col-md-3 col-lg-2 d-none d-md-block">
                            <div class="recently-search">
                                <h6 class="default">Recently searches</h6>
                                <ul>
                                    <li><a href="#">Jewellery</a>
                                        <button type="button" class="btn-remove small"></button>
                                    </li>
                                    <li><a href="#">Sohrab sepehri</a>
                                        <button type="button" class="btn-remove small"></button>
                                    </li>
                                    <li><a href="#">Arthibition gallery</a>
                                        <button type="button" class="btn-remove small"></button>
                                    </li>
                                    <li><a href="#">tehran gallery</a>
                                        <button type="button" class="btn-remove small"></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-9 col-lg-10">
                            <div class="category-search">
                                <ul class="nav nav-tabs justify-content-star main-tab" id="cat-serach"
                                    role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="tab-11" data-bs-toggle="tab"
                                            data-bs-target="#catsearch1"
                                            type="button" role="tab" aria-controls="catsearch1"
                                            aria-selected="true">All
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="tab-21" data-bs-toggle="tab"
                                            data-bs-target="#catsearch2"
                                            type="button" role="tab" aria-controls="tab2"
                                            aria-selected="false">Auctions
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="tab-31" data-bs-toggle="tab"
                                            data-bs-target="#catsearch3"
                                            type="button" role="tab" aria-controls="tab3"
                                            aria-selected="false">Artworks
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="tab-41" data-bs-toggle="tab"
                                            data-bs-target="#catsearch4"
                                            type="button" role="tab" aria-controls="tab4"
                                            aria-selected="false">Auction
                                            homes
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content main-tab-content" id="cat-serach-content">
                                    <div class="tab-pane fade show active" id="catsearch1"
                                        role="tabpanel"
                                        aria-labelledby="home-tab">
                                        <div class="owl-carousel">
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic11.jpg" width="276"
                                                            height="226" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon live-icon">Live</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">From the Saqakhaneh series</h4>
                                                    <h6 class="default">Twents Veilinghuis</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic7.jpg" width="493" height="621"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon online-icon">Online</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">The Sheet of Water</h4>
                                                    <h6 class="default">Hosein Kazemi</h6>
                                                    <div class="jumbotron countdown show start"
                                                        data-Date='2021/5/13 16:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Offer is ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic12.jpg" width="275"
                                                            height="158" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon timed-icon">Timed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Tranquility and Deep Silence in
                                                        Pure Nature</h4>
                                                    <h6 class="default">Homayoun Salimi</h6>
                                                    <div class="jumbotron countdown show end"
                                                        data-Date='2021/10/12 23:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic5.jpg" width="998" height="880"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon firstoffer-icon">First offer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Windows from the Red series</h4>
                                                    <h6 class="default">Parivash Ganji</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="catsearch2" role="tabpanel"
                                        aria-labelledby="profile-tab">
                                        <div class="owl-carousel">
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic11.jpg" width="276"
                                                            height="226" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon live-icon">Live</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">From the Saqakhaneh series</h4>
                                                    <h6 class="default">Twents Veilinghuis</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic7.jpg" width="493" height="621"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon online-icon">Online</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">The Sheet of Water</h4>
                                                    <h6 class="default">Hosein Kazemi</h6>
                                                    <div class="jumbotron countdown show start"
                                                        data-Date='2021/5/13 16:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Offer is ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic12.jpg" width="275"
                                                            height="158" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon timed-icon">Timed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Tranquility and Deep Silence in
                                                        Pure Nature</h4>
                                                    <h6 class="default">Homayoun Salimi</h6>
                                                    <div class="jumbotron countdown show end"
                                                        data-Date='2021/10/12 23:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic5.jpg" width="998" height="880"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon firstoffer-icon">First offer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Windows from the Red series</h4>
                                                    <h6 class="default">Parivash Ganji</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="catsearch3" role="tabpanel"
                                        aria-labelledby="contact-tab">
                                        <div class="owl-carousel">
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic11.jpg" width="276"
                                                            height="226" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon live-icon">Live</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">From the Saqakhaneh series</h4>
                                                    <h6 class="default">Twents Veilinghuis</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic7.jpg" width="493" height="621"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon online-icon">Online</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">The Sheet of Water</h4>
                                                    <h6 class="default">Hosein Kazemi</h6>
                                                    <div class="jumbotron countdown show start"
                                                        data-Date='2021/5/13 16:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Offer is ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic12.jpg" width="275"
                                                            height="158" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon timed-icon">Timed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Tranquility and Deep Silence in
                                                        Pure Nature</h4>
                                                    <h6 class="default">Homayoun Salimi</h6>
                                                    <div class="jumbotron countdown show end"
                                                        data-Date='2021/10/12 23:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic5.jpg" width="998" height="880"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon firstoffer-icon">First offer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Windows from the Red series</h4>
                                                    <h6 class="default">Parivash Ganji</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="catsearch4" role="tabpanel"
                                        aria-labelledby="contact-tab">
                                        <div class="owl-carousel">
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic11.jpg" width="276"
                                                            height="226" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon live-icon">Live</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">From the Saqakhaneh series</h4>
                                                    <h6 class="default">Twents Veilinghuis</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic7.jpg" width="493" height="621"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon online-icon">Online</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">The Sheet of Water</h4>
                                                    <h6 class="default">Hosein Kazemi</h6>
                                                    <div class="jumbotron countdown show start"
                                                        data-Date='2021/5/13 16:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Offer is ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic12.jpg" width="275"
                                                            height="158" alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon timed-icon">Timed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Tranquility and Deep Silence in
                                                        Pure Nature</h4>
                                                    <h6 class="default">Homayoun Salimi</h6>
                                                    <div class="jumbotron countdown show end"
                                                        data-Date='2021/10/12 23:09:00'>
                                                        <div class="running">
                                                            <timer>
                                                                <span class="days"></span>:<span
                                                                    class="hours"></span>:<span
                                                                        class="minutes"></span><span
                                                                            class="show-text"></span>
                                                            </timer>
                                                            <div class="break"></div>
                                                        </div>
                                                        <div class="ended">
                                                            <div class="text">Ended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="artwork-block">
                                                <div class="artwork-img">
                                                    <div class="bg-shadow tl-shadow10">
                                                        <img src="img/pic5.jpg" width="998" height="880"
                                                            alt=""
                                                            class="img-fluid" />
                                                        <div class="artwork-category">
                                                            <span class="category-save artwork-bookmark"></span>
                                                            <span class="category-icon firstoffer-icon">First offer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="block-body">
                                                    <h4 class="default">Windows from the Red series</h4>
                                                    <h6 class="default">Parivash Ganji</h6>
                                                    <div class="auction-calender">
                                                        <div class="auction-date">
                                                            <span class="start-date">19 June</span>
                                                            <span class="end-date">22 June</span>
                                                        </div>
                                                        <div class="auction-time">
                                                            <span class="start-time">10 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;