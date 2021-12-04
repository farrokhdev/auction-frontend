import React, { useState, useEffect } from "react";
import { Modal, Form, Input,InputNumber ,Upload, Select } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { failNotification, successNotification } from "../../utils/notification";
import MultipleUpload from "./MultipleUpload";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const { Dragger } = Upload;

function ModalAddNewArtwork({ setVisibleAddNewArtwork, visibleAddNewArtwork }) {

  const [form] = Form.useForm();
  const [uploadList, setUploadList] = useState([])
  const [categories, setCategories] = useState()
  const [newArtwork, setNewArtwork] = useState({ category_id : []})

useEffect(() => {
    getListCategory()
}, [])


// get list of sub category for show to user and select by users in dropdown to create artwork
const getListCategory = () => {
    axios.get(`${BASE_URL}/sale/category/?title=آثار` ).then(res => {
      setCategories([ ...(res.data.data.result[0].children).map( item => 
        ({label : item.title , value : item?.id })) ])
    }).catch(err => {
        console.error(err);
    })
}


  const onFinish = (values) => {
    console.log(values);

    let payload = {
        "artwork_title": values.artwork_title,
        "persian_artist_name": values.persian_artist_name,
        "persian_description": values.persian_description,
        "price": values.price,
        "media" : uploadList,
        "category_id": newArtwork.category_id,
        "offer_home_auction" : "required"
      }

            
            axios.post(`${BASE_URL}/sale/product/` , payload).then(res => {
                console.log(res);
                if(res.data.data.statusCode !== 400){
                    successNotification("ایجاد اثر" , "اثر با موفقیت ایجاد شد")
                    setTimeout(() => {
                      setVisibleAddNewArtwork(false)
                      setNewArtwork({ category_id : []})
                    }, 1200);
                }else{
                    failNotification("خطا" , res.data.data.error_message[0])
                }
            }).catch(err => {
                console.error(err);
            })

    
    
  };


  // function for set categories id
  const handleSetCategory = (value) =>{
    setNewArtwork({
        ...newArtwork , 
        category_id : value
    })
}
  
  return (
    <React.Fragment>
      <Modal
        title="اثر جدید"
        centered
        className="modal-bids"
        visible={visibleAddNewArtwork}
        onOk={() => setVisibleAddNewArtwork(false)}
        onCancel={() => setVisibleAddNewArtwork(false)}
        width={800}
        footer={[]}
      >
        <Form
          name="add-new-artwork"
          form={form}
          {...formItemLayout}
          onFinish={onFinish}
        >
          <div className="row">
            <div className="col">
              <div className="d-block">


              <MultipleUpload  
                uploadList={uploadList} 
                setUploadList={setUploadList} 
              />

              </div>
                
            {/* ----------- input title of artwork -------------- */}

              <div className="d-block d-xl-flex">
                <div className="col mx-xl-3">

                  <label className="d-flex default-lable my-2 mx-4">نام اثر</label>
                  <Form.Item
                    {...formItemLayout}
                    name="artwork_title"
                    rules={[
                      {
                        required: true,
                        message: "نام اثر وارد نشده است!",
                      },
                    ]}
                  >
                    <Input
                      className="default-input"
                      placeholder="نام اثر را وارد نمایید."
                    />
                  </Form.Item>

                </div>

                <div className="col mx-xl-3">

                  <label className="d-flex default-lable my-2 mx-4">هنرمند</label>
                  <Form.Item
                    {...formItemLayout}
                    name="persian_artist_name"
                    rules={[
                      {
                        required: true,
                        message: "نام هنرمند وارد نشده است!",
                      },
                    ]}>
                    <Input
                      className="default-input"
                      placeholder="نام هنرمند را وارد نمایید."
                    />
                  </Form.Item>
                </div>
              </div>

            {/* --------------- input select categories --------------- */}
              <div className="d-flex">
                <div className="col">

                  <label className="d-flex default-lable my-2 mx-4">دسته بندی</label>
                  <Form.Item
                    {...formItemLayout}
                    name="category_id"
                    rules={[
                      {
                        required: true,
                        message: "تخمین قیمت وارد نشده است!",
                         },
                    ]}>
                        <Select    
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' , }}
                            placeholder="دسته‌بندی را انتخاب کنید"
                            optionFilterProp='label'
                            options={categories}
                            className="multiple-select"
                            onChange={handleSetCategory}
                        >
                    
                                            
                    </Select>
                  </Form.Item>
                </div>
              </div> 

              {/* --------------- input price artwork --------------- */}             
              
              <div className="d-flex">
                <div className="col">

                  <label className="d-flex default-lable my-2 mx-4">تخمین قیمت</label>
                  <Form.Item
                    {...formItemLayout}
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "مقدار تخمین قیمت خالی یا نامعتبر است!",
                      },
                      {
                        pattern: /^[\d]{0,15}$/,
                        message: "تنها کاراکتر عدد معتبر می‌باشد!",
                    },
                    ]}
                  >
                    <InputNumber
                        type="text"
                        placeholder="تخمین قیمت را وارد نمایید."
                        formatter={value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        className="default-input w-100 text-right"
                        defaultValue=""
                    />
                  </Form.Item>
                </div>

              </div>

              {/* --------------- input description about artwork --------------- */} 

              <div className="d-flex">
                <div className="col">

                  <label className="d-flex default-lable my-2 mx-4">توضیحات</label>
                  <Form.Item
                    {...formItemLayout}
                    name="persian_description"
                    rules={[
                      {
                        required: false,
                        message: "توضیحات وارد نشده است",
                      },
                      {
                        pattern: /^[^a-zA-Z][^a-zA-Z]*$/g,
                        message: "کاراکتر انگلیسی مجاز نیست!",
                    }
                    ]}
                  >
                    <Input.TextArea
                      className="default-input pt-2"
                      rows={4}
                      placeholder="توضیحات را وارد نمایید."
                    />
                  </Form.Item>
                </div>
              </div>

              <div class="row">
                <div class="button-group">
                  <button htmlType="submit" class="btn-default">افزودن اثر</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
}

export default ModalAddNewArtwork;
