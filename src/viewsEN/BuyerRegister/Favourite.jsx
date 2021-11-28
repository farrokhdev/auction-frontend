import React, { useState } from 'react';
import { Button, Card } from "antd";
import img6 from '../../imgEN/img-6.jpg'
import Chooseartwork from './ChooseArtwork';

const Favourite = (props) => {
    const { setSelectComponent, selectComponent, setSelectProducts } = props
    const [selectProduct, setSelectProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [auction, setAuction] = useState(0)
    const [next, setNext] = useState(false)
    const { Meta } = Card;

    const sendData = () => {
        setLoading(true)
        let temp = {}
        for (let i in selectProduct) {
            temp[selectProduct[i].id] = ""
        }
        setSelectProducts(temp)
        setNext(true)
        setSelectComponent(selectComponent + 1)

    }
    return (
        <div>

            <p className="text-center">Choose your favorite products before participating in the auction.</p>
            <Chooseartwork selectProduct={selectProduct} setSelectProduct={setSelectProduct} auction={auction} id={props.id} />


            <div>
                <div className="row mt-3">
                    {
                        selectProduct && selectProduct.length ? selectProduct.map((item, i) => <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                            <div key={i} className="my-3">
                                <Card
                                    style={{ width: "100%" }}
                                    cover={
                                        <div className="image-custom-back" style={{ backgroundImage: `url(${item?.media?.exact_url})`, height: "250px" }} />
                                    }
                                >
                                    <Meta
                                        title={item?.artwork_title_en}
                                        description={item?.technique_en}
                                    />
                                </Card>
                            </div>
                        </div>
                        ) : ''
                    }
                </div>

                <div>
                    {selectProduct && selectProduct.length >= 1 ? <Button loading={loading} className="btn-default" htmlType="submit" onClick={() => sendData()}>
                        Confirmation and Continue
                    </Button> : ''}
                    {next ? <Button className="btn-default " loading={loading} onClick={() => {
                        setSelectComponent(selectComponent + 1)
                    }}>
                        Continue
                    </Button> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Favourite;