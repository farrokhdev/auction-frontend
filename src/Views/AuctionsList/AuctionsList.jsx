import React, {useEffect, useState} from "react";
import Footer from "../../components/footer";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";
import moment from 'jalali-moment'
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function AuctionsList() {

  const [Auctions, setAuctions] = useState("");
  const [pageSize, setPageSize] = useState(30);


  const getProducts = (page_size=pageSize) => {
    axios.get(`${BASE_URL}/sale/auctions/?page_size=${page_size}`)
        .then(resp => {
          if (resp.data.code === 200) {
            setAuctions(resp.data.data.result)
          }

        })
        .catch(err => {
          console.error(err);
        })
  }

  useEffect(() => {
    getProducts()

  }, [])

    function AuctionType(type){

        switch(type){
            case "SECOND_HIDDEN":
                return "دومین پیشنهاد"
            case "HIDDEN":
                return "اولین پیشنهاد"
            case "PERIODIC":
                return "مدت دار"
            case "ONLINE":
                return "آنلاین"
            case "LIVE":

                return "زنده"
            default:
                return ""
        }
    }


  return (
      <div>
          <HeaderPanel  titlePage = {"حراج‌های ساخته‌شده"}/>
          <div className="panel-main">
          <PanelSidebar/>
          {/**Main**/}
          <div className="panel-body">
              <div className="panel-container">
                  <Link to="/panel-add-auction">
                  <button type="button" className="btn btn-default"><FontAwesomeIcon className="pl-2" icon={faPlus} />  حراج جدید
                  </button></Link>
                  {/*<button type="button" className="btn btn-outline-pink" style={{marginRight:5}}>بارگزاری تفاهم‌نامه*/}
                  {/*</button>*/}
                  <div className="col-xxxxl-8 mrgt30">
                      <div className="table-responsive">
                          <table className="panel-table create-auctions table ">
                              <thead>
                              <tr>
                                  <td>نام حراج</td>
                                  <td>نوع</td>
                                  <td>تاریخ شروع</td>
                                  <td>تاریخ پایان</td>
                                  <td>آثار</td>
                                  <td>پیشنهادات</td>
                                  <td>درخواست عضویت</td>
                                  <td></td>
                              </tr>
                              </thead>
                              <tbody>
                              { Auctions && Auctions.length >= 1  ? Auctions.map((item, key) => {
                                  return (
                                      <tr key={key}>
                                          <td>{item.title}</td>
                                          <td>{AuctionType(item.type)}</td>
                                          <td>{moment(item.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                          <td>{item.end_time !== "None" ? moment(item.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY'): ""}</td>

                                          <td>
                                              <button type="button" className="btn-outline-gray">{item.product.length} اثر</button>
                                          </td>
                                          <td>
                                              <Link to="/panel-Bids">
                                              <button type="button" className="btn-outline-gray" data-bs-toggle="modal"
                                                      data-bs-target="#auctionBids">3 پیشنهاد
                                              </button>
                                              </Link>
                                          </td>
                                          <td>
                                              <button type="button" className="btn-outline-gray"
                                                      data-bs-target="#auctionRequest"
                                                      data-bs-toggle="modal">8 درخواست
                                              </button>
                                          </td>
                                          <td>
                                              <button type="button">
                                                  <FontAwesomeIcon icon={faPen}/>
                                              </button>
                                              <button type="button">
                                                  <FontAwesomeIcon icon={faTimes}/>
                                              </button>
                                          </td>
                                      </tr>
                                  )
                                }) :""}
                              </tbody>
                          </table>
                      </div>

                  </div>
              </div>
          </div>
          </div>
          {/**Main**/}

          <div className="modal fade" id="auctionBids" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog w-800">
                  <div className="modal-content">
                      <div className="modal-header">
                          <div className="container g-0 d-flex justify-content-between">
                              <div className="main-title">
                                  <h2 className="default titr">
                                      پیشنهادات کالکشن7
                                  </h2>
                              </div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                          </div>
                      </div>
                      <div className="modal-body">
                          <div className="amount-list">
                              <div className="amount-block">
                                  <div className="amount-range">رضا شبستری</div>
                                  <div className="amount-range">
                                      5,000,000<span className="unit">تومان</span>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">احمد نجفی</div>
                                  <div className="amount-range">
                                      4,500,000<span className="unit">تومان</span>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">سپیده مرادی</div>
                                  <div className="amount-range">
                                      4,000,000<span className="unit">تومان</span>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">میترا محمدی</div>
                                  <div className="amount-range">
                                      3,500,000<span className="unit">تومان</span>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">سایه سمیعی</div>
                                  <div className="amount-range">
                                      3,000,000<span className="unit">تومان</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="modal fade" id="auctionRequest" tabIndex="-1" aria-labelledby="exampleModalLabel"
               aria-hidden="true">
              <div className="modal-dialog w-800">
                  <div className="modal-content">
                      <div className="modal-header">
                          <div className="container g-0 d-flex justify-content-between">
                              <div className="main-title">
                                  <h2 className="default titr">
                                      درخواست‌های کالکشن7
                                  </h2>
                              </div>
                              <button type="button" className="btn-close" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                          </div>
                      </div>
                      <div className="modal-body">
                          <div className="amount-list">
                              <div className="amount-block">
                                  <div className="amount-range">رضا شبستری</div>
                                  <div className="amount-range">
                                      <button type="button" className="btn btn-default">تایید</button>
                                      <button type="button" className="btn btn-outline-gray">رد</button>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">احمد نجفی</div>
                                  <div className="amount-range">
                                      <button type="button" className="btn btn-default">تایید</button>
                                      <button type="button" className="btn btn-outline-gray">رد</button>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">سپیده مرادی</div>
                                  <div className="amount-range">
                                      <button type="button" className="btn btn-default">تایید</button>
                                      <button type="button" className="btn btn-outline-gray">رد</button>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">میترا محمدی</div>
                                  <div className="amount-range">
                                      <button type="button" className="btn btn-default">تایید</button>
                                      <button type="button" className="btn btn-outline-gray">رد</button>
                                  </div>
                              </div>
                              <div className="amount-block">
                                  <div className="amount-range">سایه سمیعی</div>
                                  <div className="amount-range">
                                      <button type="button" className="btn btn-default">تایید</button>
                                      <button type="button" className="btn btn-outline-gray">رد</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </div>




  );
}

export default AuctionsList;
