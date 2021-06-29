import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Maintitle from "../../components/main title for all";
import Sidebar from "../../components/side-bar";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";

function Artworks() {

  const [Products, setProducts] = useState("");
  const [pageSize, setPageSize] = useState(9);

  const getProducts = (page_size=pageSize) => {
    axios.get(`${BASE_URL}/sale/product/?page_size=${page_size}`)
        .then(resp => {
          if (resp.data.code === 200) {
            setProducts(resp.data.data.result)
          }

        })
        .catch(err => {
          console.error(err);
        })
  }

  useEffect(() => {
    getProducts()

  }, [])


  return (
    <div dir="rtl">
      <Header />
      <main class="innercontent" id="all-artworks">
        <div class="container innercontainer">
          <Maintitle title={'محصولات'} />
          <div class="row">
            <Sidebar />
            <div class="col-lg-9">
              <div class="row row-cols-md-3 row-cols-2">
                {Products && Products.length >= 1 ? Products.map((item, key) => {
                  return(
                      <div className="col" key={key}>
                        <Link to="#" class="artwork-block">
                          <div className="artwork-img">
                            <img
                                src={item.media.exact_url}
                                width="998"
                                height="880"
                                alt=""
                                className="img-fluid"
                            />
                            <div className="artwork-category">
                        <span className="category-save">
                          <FontAwesomeIcon icon={faBookmark}/>
                        </span>
                              <span className="category-icon live-icon">زنده</span>
                            </div>
                          </div>
                          <div className="block-body text-center">
                            <h6 className="default gray50 ">{item.persian_artist_name}</h6>
                            <h4 className="default">{item.artwork_title}</h4>
                            <div className="auction-calender">
                              <div className="auction-date">
                                <span className="start-date">7 خرداد</span>
                                <span className="end-date">9 خرداد</span>
                              </div>
                              <div className="auction-time">
                                <span className="start-time">10</span>
                              </div>
                            </div>
                            <div className="price-block">
                              <span>قیمت پایه:</span>
                              <span className="price">
                          {item.price}<span className="price-unit">تومان</span>
                        </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                  )
                }) : ""}


              </div>
              <Pagination
                  style={{direction: 'ltr', textAlign: 'center'}}
                  showSizeChanger
                  responsive
                  onShowSizeChange={(current, pageSize) => {
                    getProducts(pageSize)
                  }}
                  onChange={(current, pageSize) => {
                    console.log(current, pageSize)
                  }}
                  defaultCurrent={1}
                  total={500}
                  pageSizeOptions={[9, 18, 36, 48]}
                  defaultPageSize={9}
              />

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Artworks;
