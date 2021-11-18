import React, {useEffect, useState} from "react";
import {Card, Checkbox, message, Spin} from "antd";
import img8 from '../../imgEN/img-8.jpg'

function Chooseartwork(props) {
  const {selectProduct, setSelectProduct,auction}=props
  const [loading, setLoading] = useState(false)
  const [allProducts, setAllProducts] = useState([1,2,3])
  const [dataCount, setDataCount] = useState(0)
  const { Meta } = Card;

  useEffect(()=>{
    setSelectProduct([])
  },[auction])


  return (
    <>
      <Spin spinning={loading}>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="search-input">
                <input
                    type="text"
                    className="default-input"
                    placeholder="Search more than 100 auctions..."
                    // onChange={(e)=>getData(e.target.value)}
                />
                <button type="button" className="btn-search"></button>
              </div>
            </div>
            <div className="col-md-3 num-artwork">
              <span className="font12">Artworks : </span>
              <span className="num-artwork-item pinkcolor">{selectProduct?.length}</span>
              <span className="num-artwork-item">of</span>
              <span className="num-artwork-item">{dataCount}</span>
            </div>
          </div>
          <div className="chooseartwork-custome">
            <div className="row mt-3">
          {
            allProducts && allProducts.length ? allProducts.map((item,i)=> <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="my-3">
                <Card
                    style={{ width: "100%" }}
                    cover={
                      <div className="image-custom-back" style={{ backgroundImage: `url(${img8})`, height: "250px" }} />
                    }
                >
                  <Meta
                      avatar={<Checkbox checked={selectProduct.some(t=>item?.id===t?.id)} onChange={e=>{
                        if(e.target.checked)
                          setSelectProduct([...selectProduct,item])
                        else {
                          let t=selectProduct.filter(t=>t?.id!==item?.id)
                            setSelectProduct(t)
                        }

                      }}/>}
                      // title={item.artwork_title}
                      // description={item?.technique}
                      title={'From the Saqakhaneh series'}
                      description={'Sohrab Sepehri'}
                  />
                </Card>
              </div>
                </div>
            ):''
          }
            </div>
          </div>
        </div>
      </div>
      </Spin>
    </>
  );
}

export default Chooseartwork;
