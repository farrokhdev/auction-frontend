import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import img6 from '../../images/img-6.jpg';
import img7 from '../../images/img-7.jpg';
import img8 from '../../images/img-8.jpg';
import img9 from '../../images/img-9.jpg';
import img_9 from '../../images/img-9.jpg';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';
import pic6 from '../../images/pic6.jpg';
import pic7 from '../../images/pic7.jpg';
import logo3 from '../../images/logo-3.png';
import CardArtwork from './CardArtwork';
import ReminderBoxArtworkSection from './RemiderBoxArtworkSection';
import DetailAuctionInfoTabSection from './DetailAuctionInfoTabSection';
import TabSelectorSection from './TabSelectorSection';
import PaginationSection from './PaginationSection';

function SingleAuctionPage() {
return (
<div>
    <Header />
    <main class="innercontent" id="oneAuction">
    <div class="container innercontainer">
        <div class="row sm-mrgb50">
            <div class="col-6">
                <div class="main-title d-inline-flex">
                    <h2 class="default titr">کالکشن 7</h2>
                    <ul class="breadcrumb-cs">
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">حراج‌ها</a></li>
                        <li class="active">کالکشن 7</li>
                    </ul>
                </div>
            </div>
            <div class="w-100 lg-mrgb50 d-lg-none d-block"></div>
            <div class="col-lg-6 ">
                {/* <p class="auction-link">برای کسب اطلاعات بیشتر در مورد این حراج،  */}
                <p class="">برای کسب اطلاعات بیشتر در مورد این حراج، 
                <a href="#">اینجا کلیک کنید.</a>
            </p>
            </div>
        </div>
        <div class="inner-cover"></div>


            <ReminderBoxArtworkSection 
                price_artists = "25"
                price_artworks = "100,000,000"
                price_range = "500-700"
                start_date = "7 خرداد"
                end_date = "9 خرداد"
                start_time = "10"
                end_time = "22"
                house_auction = "گالری آرتیبیشن"
                auction = "هنر مدرن و معاصر"
                auction_type = "آنلاین"
            />

        <div class="">
            
            {/* Switch Tabs section */}
            <TabSelectorSection/>

            <div class="tab-content mrgt50" id="auction-content">
                <div class="tab-pane fade show active" id="auction1" role="tabpanel"
                     aria-labelledby="home-tab">
                    <div class="d-block d-md-flex">
                        <div class="col-md-4 col-sm-5 col-9">
                            <div class="search-input">
                                <input type="text" class="default-input" placeholder="در بیش از 100 حراج جستجو کنید."/>
                                <button type="button" class="btn-search"></button>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-7 col-3 mt-3 mt-md-0">
                            <div class="sort-block">
                                <span class="btn-sort">مرتب‌سازی با<span class="d-none d-md-inline-block">:</span></span>
                                <ul class="sort-list">
                                    <li>صعودی</li>
                                    <li class="active">نزولی</li>
                                    <li>محبوب‌ترین</li>
                                    <li>پرفروش‌ترین</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row mrgt30 all-artwork row-cols-2  row-cols-lg-4"> */}
                    <div class="row mrgt30 all-artwork justify-content-center">

                        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {1}
                            />       
                        </div>        
                        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {1}
                            />       
                        </div>           
                        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {1}
                            />       
                        </div>            
                         <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {1}
                            />       
                        </div>

                            {/* <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {2}
                            />   
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {3}
                            />       
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {4}
                            />   
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {5}
                            /> */}

{/* 
                        <div class="col">

                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {6}
                            />   
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {8}
                            />       
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {9}
                            />   
                            
                            <CardArtwork 
                                price_range = '500-700'
                                price_base = "100,000,000"
                                artist = "سهراب سپهری"
                                house_auction = "از ژورنال سقاخانه"
                                lot_num = {10}
                            />

                        </div> */}

                        {/* <div class="col">

                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {11}
                                />   
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {12}
                                />       
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {13}
                                />   
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {14}
                                />

                        </div> */}

                            {/* <div class="col">

                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {15}
                                />   
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {16}
                                />       
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {17}
                                />   
                                
                                <CardArtwork 
                                    price_range = '500-700'
                                    price_base = "100,000,000"
                                    artist = "سهراب سپهری"
                                    house_auction = "از ژورنال سقاخانه"
                                    lot_num = {18}
                                />

                        </div> */}
                    </div>
                   
                   <PaginationSection/>

                </div>

                {/* Tab detail auction */}
                <DetailAuctionInfoTabSection/>
                
            </div>
        </div>
    </div>
</main>


    <Footer />
</div>
)
}

export default SingleAuctionPage;

