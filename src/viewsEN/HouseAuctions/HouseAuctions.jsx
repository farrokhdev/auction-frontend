import React, { useState } from 'react';
import HeaderEN from '../../componentsEN/HeaderEN';
import Footer from '../../componentsEN/Footer';
import MainTitle from '../../componentsEN/MainTitle/MainTitle';
import SiderHouseAucitons from './SiderHouseAucitons';
import logo from "../../imgEN/logo-1.jpg"
import PaginationComponent from '../../componentsEN/PaginationComponent';

function HouseAuctions() {

    const [Tags, setTags] = useState([])
    const [houseAuctionList, setHouseAuctionList] = useState([1, 2, 3, 4, 5])
    const [categoryActivities, setCategoryActivities] = useState(['Painting', 'Painting 2', 'Painting 3', 'Statue', 'Collector'])
    const [countProducts, setCountProducts] = useState(1)
    const [params, setParams] = useState({
        page: 1,
        page_size: 10,
        activity_type: [],
        search: '',
        ordering: '',
    })

    const handleSetCategory = (value) => {
        setParams({
            ...params, activity_type: value
        })
    }

    const handleSetSearchFilter = (value) => {
        setParams({
            ...params, search: value
        })
    }

    const handleSetOrdering = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: 'creation_time'
        })
    }

    const handleSetOrderingOld = () => {
        setParams({
            // since the ordering field on the product is different from auctions we have to
            // set this explicitly
            ...params, ordering: '-creation_time'
        })
    }
    const handleClose = (value) => {
        if (params?.activity_type.indexOf(value) > -1) {
            handleSetCategory(params?.activity_type?.filter(item => item !== value))
        }
        setTags(Tags?.filter((item) => item !== value))
    };

    const handleRemoveFilters = () => {
        setTags([])
        setParams({
            page: 1,
            page_size: 10,
            activity_type: [],
            search: '',
            ordering: '',
        })

    }


    const handeSelectPage = (e) => {
        setParams({
            ...params, page: e
        })
    }


    return (
        <>
            <HeaderEN />
            <main className="innercontent" id="all-auctions">
                <div className="container innercontainer">
                    <MainTitle title={'Auction Houses'} handleSetOrdering={handleSetOrdering} handleSetOrderingOld={handleSetOrderingOld} />
                    <div className="row">
                        <SiderHouseAucitons
                            handleClose={handleClose}
                            Tags={Tags}
                            setTags={setTags}
                            handleRemoveFilters={handleRemoveFilters}
                            params={params}
                            handleSetCategory={handleSetCategory}
                            categoryActivities={categoryActivities}
                            handleSetSearchFilter={handleSetSearchFilter}
                        />

                        <div className="col-lg-9">
                            <div className="row row-cols-xl-2 row-cols-1">
                                {houseAuctionList?.length ? houseAuctionList?.map(house => (
                                    <React.Fragment key={house?.id}>
                                        <div className="col">
                                            <div className="h-block">
                                                <div className="row">
                                                    <div className="col-xl-5 col-3">
                                                        <div className="h-block-img">
                                                            <img src={logo} width="159" height="159" alt="smart auction"
                                                                className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-9">
                                                        <div className="h-block-header">
                                                            <div className="h-block-title">
                                                                <h3 className="default">Sareban gallery</h3>
                                                                <h6 className="default">Visual art, ...</h6>
                                                            </div>
                                                            <button type="button" className="btn-follow">Follow</button>
                                                        </div>
                                                        <div className="h-block-info">
                                                            <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                                                            <address className="all-info"><span className="province">Tehran Province,</span>Tehran,
                                                                Hoveyzeh St, No.130
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </React.Fragment>
                                )) : ''}
                            </div>
                        </div>
                        <PaginationComponent count={countProducts} handeSelectPage={handeSelectPage} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default HouseAuctions