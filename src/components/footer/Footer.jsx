import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import logobw from "../../images/logo-bw.svg";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";


export default function Footer() {

  const [Products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)



  const getProducts = () => {
    setLoading(true)
    axios.get(`${BASE_URL}/panel/contents/`)
      .then(resp => {
        setLoading(false)
        if (resp.data.code === 200) {
          setProducts(resp.data.data.result)
        }

      })
      .catch(err => {
        setLoading(false)
        console.error(err);
      })
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <footer>
        <div className="container containercs">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block">
              <Link to="/">
                <img
                  src={logobw}
                  width="468"
                  height="234"
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-9 pb-5">
              <ul className="simple-menu">
                {Products?.length && Products?.map((item) => (

                  <li className="list-inline-item">
                    {/* شرایط استفاده */}
                    <Link key={item?.id} to={`/Terms-of-use/${item?.title}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* <li>
                    <Link>حریم خصوصی</Link>
                  </li>
                  <li>
                    <Link>همکاری با ما</Link>
                  </li>
                  <li>
                  <Link>تماس با ما</Link>
                </li> */}
                <li>
                  <Link to="/faq">سوالات متداول</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-3">
              <ul className="social">
                <li>
                  <Link to="/" id="facebook"></Link>
                </li>
                <li>
                  <Link to="/" id="instagram"></Link>
                </li>
                <li>
                  <Link to="/" id="telegram"></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row brdrtop ">
            <div className="col">
              <span>تمامی حقوق این سایت برای آکشن محفوظ است</span>
            </div>
            <div className="col text-start">
              <span className="footer-call">+98 21 88 85 90 30</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
