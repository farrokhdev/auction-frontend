import React, { useState } from "react";
import Chooseartwork from "./ChooseArtwork";
import { Button, Card, Checkbox, message, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { JOIN_AUCTION } from "../../utils/constant";
import ChooseAuction from "./ChooseAuction";
import { handleShowImage } from "../../utils/showImageProduct";

const Favourite = (props) => {
  const { setSelectComponent, selectComponent, setSelectProducts } = props;
  const [selectProduct, setSelectProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [auction, setAuction] = useState(0);
  const [next, setNext] = useState(false);
  const { Meta } = Card;
  const sendData = () => {
    setLoading(true);
    let temp = {};
    for (let i in selectProduct) {
      temp[selectProduct[i].id] = "";
    }
    setSelectProducts(temp);
    setNext(true);
    setSelectComponent(selectComponent + 1);

    // axios.post(`${BASE_URL}${JOIN_AUCTION}`, {sale_id:auction,products_id:data})
    //     .then(resp => {
    //         setLoading(false)
    //         if (resp.data.code === 201 ) {
    //             message.success("اطلاعات حساب شما با موفقیت ثبت شد")
    //             setNext(true)
    //             setSelectComponent(selectComponent + 1)
    //         }
    //     })
    //     .catch(err => {
    //         setLoading(false)
    //         console.error(err);
    //         message.error("دوباره تلاش کنید")
    //     })
  };
  return (
    <div>
      <p className="text-center">
        قبل از شرکت در حراج محصولات مورد علاقه خود را انتخاب کنید.
      </p>
      <Chooseartwork
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
        auction={auction}
        id={props.id}
      />

      <div>
        {/* <div className="mobile-v row mt-3 ">
          {selectProduct && selectProduct.length
            ? selectProduct.map((item, i) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                  <div key={i} className="my-3">
                    <Card
                      style={{ width: "100%" }}
                      cover={
                        <div
                          className="image-custom-back"
                          style={{
                            backgroundImage: `url(${
                              item && handleShowImage(item)
                            })`,
                            height: "250px",
                          }}
                        />
                      }
                    >
                      <Meta
                        title={item?.artwork_title}
                        description={item?.technique}
                      />
                    </Card>
                  </div>
                </div>
              ))
            : ""}
        </div> */}

        <div>
          {selectProduct && selectProduct.length >= 1 ? (
            <Button
              loading={loading}
              className="btn-default"
              htmlType="submit"
              onClick={() => sendData()}
            >
              ثبت و ادامه
            </Button>
          ) : (
            ""
          )}
          {next ? (
            <Button
              className="btn-default "
              loading={loading}
              onClick={() => {
                setSelectComponent(selectComponent + 1);
              }}
            >
              ادامه
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
