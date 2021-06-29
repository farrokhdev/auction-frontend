import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes, faPlus} from "@fortawesome/free-solid-svg-icons";
import moment from 'jalali-moment'

function AuctionsList() {

  const [Auctions, setAuctions] = useState("");
  const [pageSize, setPageSize] = useState(9);


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


  return (
      <div dir="rtl">
          <Header/>

          {/**Main**/}
          <div className="panel-body">
              <div className="panel-container">
                  <button type="button" className="btn btn-default"><FontAwesomeIcon  icon={faPlus} />حراج جدید
                  </button>
                  <button type="button" className="btn btn-outline-pink" style={{marginRight:5}}>بارگزاری تفاهم‌نامه
                  </button>
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
                                      <tr>
                                          <td>{item.title}</td>
                                          <td>{item.type}</td>
                                          <td>{moment(item.start_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                          <td>{moment(item.end_time, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</td>
                                          <td>
                                              <button type="button" className="btn-outline-gray">125 اثر</button>
                                          </td>
                                          <td>
                                              <button type="button" className="btn-outline-gray" data-bs-toggle="modal"
                                                      data-bs-target="#auctionBids">3 پیشنهاد
                                              </button>
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
          {/**Main**/}

          <Footer/>
      </div>
  );
}

export default AuctionsList;
