import React, {useState} from 'react';
import Chooseartwork from "./ChooseArtwork";
import {Button, Card, Checkbox, message, Modal} from "antd";
import Meta from "antd/es/card/Meta";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import {JOIN_AUCTION} from "../../utils/constant";
import ChooseAuction from "./ChooseAuction";

const Favourite = (props) => {
    const {setSelectComponent, selectComponent} = props
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectProduct, setSelectProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [auction, setAuction] = useState(0)
    const [next, setNext] = useState(false)
    const { Meta } = Card;
    const sendData = () => {
        setLoading(true)
        axios.post(`${BASE_URL}${JOIN_AUCTION}`, {sale_id:auction,products_id:data})
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 201 ) {
                    // const res = resp.data?.data?.result;
                    message.success("اطلاعات حساب شما با موفقیت ثبت شد")
                    // let check = Object.keys(res).some(t => !res[t]);
                    setNext(true)
                    // refreshTable()
                    setSelectComponent(selectComponent + 1)
                    setIsModalVisible(false)
                }
            })
            .catch(err => {
                setLoading(false)
                console.error(err);
                message.error("دوباره تلاش کنید")
            })
    }
    return (
        <div>

<p className="text-center">قبل از شرکت در حراج محصولات مورد علاقه خود را انتخاب کنید.</p>
            <div className="text-center">
                <ChooseAuction auction={auction} setAuction={setAuction}/>
                {auction ?<div className="default-box-choose mt-3" onClick={() => {
                    setIsModalVisible(true)
                }}>انتخاب حراجی
                </div>:''}
            </div>
            <Modal centered title={
                <div className='d-flex align-items-center justify-content-between'>
                   <span className="default titr">آثار</span>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setIsModalVisible(false)}
                    />

                </div>
            } className="text-end" width={1000} visible={isModalVisible}
                   onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)} footer={[
                <div className="text-center"><Button key={2}
                        type="" onClick={() => {
                            let t={}
                    selectProduct.map(element=>(t[element?.id ]=""))
                    setTimeout(()=>{   setData(t)

                        setIsModalVisible(false)},200)

                }}
                        className="btn-default">
                    تایید
                </Button></div>,

            ]}><Chooseartwork selectProduct={selectProduct} setSelectProduct={setSelectProduct} auction={auction}/></Modal>


            <div>
                <div className="row mt-3">
                    {
                        selectProduct && selectProduct.length ? selectProduct.map((item,i)=> <div className="col-12 col-md-6 col-lg-4 col-xl-3 ">
                                <div className="my-3">
                                    <Card
                                        style={{ width: "100%" }}
                                        cover={
                                            <img
                                                alt="بدون تصویر"
                                                src={item?.media?.exact_url}
                                            />
                                        }
                                        // actions={[
                                        //   <SettingOutlined key="setting" />,
                                        //   <EditOutlined key="edit" />,
                                        //   <EllipsisOutlined key="ellipsis" />,
                                        // ]}
                                    >
                                        <Meta
                                            title={item.artwork_title}
                                            description="This is the description"
                                        />
                                    </Card>
                                </div>
                            </div>
                        ):''
                    }
                </div>

                <div>
                    {selectProduct && selectProduct.length >= 1 ?<Button loading={loading} className="btn-default" htmlType="submit" onClick={()=>sendData()}>
                        ثبت
                    </Button> :''}
                    {next ? <Button className="btn-default " loading={loading} onClick={() => {
                        setSelectComponent(selectComponent + 1)
                    }}>
                        ادامه
                    </Button> : ""
                    }
                    <span className="px-2 d-inline-block"/>
                    <Button className="btn-gray" loading={loading} onClick={() => {
                        setSelectComponent(selectComponent - 1)
                    }}>
                        بازگشت
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Favourite;