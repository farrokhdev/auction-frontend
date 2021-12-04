import React, { useState, useEffect } from "react";
import { Modal, Form, Input,InputNumber ,Upload, Select } from "antd";
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { failNotification, successNotification } from "../../utils/notification";
import MultiUploadEditAndCreate from "./MultiUploadEditAndCreate";

const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const { Dragger } = Upload;

function ModalAddNewArtwork({ setVisibleEditArtwork, visibleEditArtwork  , ARTWORK_ID}) {

  const [form] = Form.useForm();
  const [uploadList, setUploadList] = useState([])
  const [categories, setCategories] = useState()
  const [newArtwork, setNewArtwork] = useState({ category_id : []})
  const [artwork, setArtwork] = useState()
  const [artworkCategories, setArtworkCategories] = useState([])

useEffect(() => {
    getListCategory()
    if(!!ARTWORK_ID){
      getArtwork()
    }
}, [ARTWORK_ID])


// get list of sub category for show to user and select by users in dropdown to create artwork
const getListCategory = () => {
    axios.get(`${BASE_URL}/sale/category/?title=آثار` ).then(res => {
      setCategories([ ...(res.data.data.result[0].children).map( item => 
        ({label : item.title , value : item?.id })) ])
    }).catch(err => {
        console.error(err);
    })
}


const getArtwork = () => {
    axios.get(`${BASE_URL}/sale/product/${ARTWORK_ID}/`).then(res => {
      setArtwork(res.data.data.result)
      setArtworkCategories(
        res.data.data.result.category.map((item) => ({
          value: item?.id,
          label: item?.title,
        }))
    );
    }).catch(err => {
      console.error(err);
  })
}


useEffect(() => {
  if(ARTWORK_ID){


      form.setFieldsValue({

          artwork_title: artwork?.artwork_title,
          persian_artist_name: artwork?.persian_artist_name,
          persian_description: artwork?.persian_description,
          price: artwork?.price,
          media : artwork?.media,
          category_id: artworkCategories?.map(item => item.value),
          offer_home_auction : "required"
      })
    }
}, [artwork , artworkCategories]);



  const onFinish = (values) => {
    console.log(values);


    let payload = {
        "artwork_title": values.artwork_title,
        "artwork_title_en": values.artwork_title,
        "persian_artist_name": values.persian_artist_name,
        "persian_description": values.persian_description,
        "price": values.price,
        "media" : artwork?.media,
        "category_id": newArtwork?.category_id?.length ? newArtwork?.category_id : values.category_id  ,
        "offer_home_auction" : "required"
      }

      axios.put(`${BASE_URL}/sale/product/${ARTWORK_ID}/` , payload).then(res => {
          console.log(res);
          if(res.data.data.statusCode !== 400){
              successNotification("ویرایش محصول" , "ویرایش محصول با موفقیت انجام شد")
              getArtwork()
              setTimeout(() => {
                setVisibleEditArtwork(false)
              }, 1000);
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


const handleClose = () => {
  setVisibleEditArtwork(false)
}
  
  return (
    <React.Fragment>
      <Modal
        title="Edit image"
        centered
        className="modal-edit-artwork-en"
        visible={visibleEditArtwork}
        onOk={handleClose}
        onCancel={handleClose}
        width={800}
        footer={[]}
      >

<div class=" border-0 p-4">
        <Form
          name="add-new-artwork"
          form={form}
          {...formItemLayout}
          onFinish={onFinish}
        >
          <div className="row">
            <div className="col">
              <div className="d-block">

              
              <MultiUploadEditAndCreate 
                  formDataArtwork={artwork}
                  setFormDataArtwork={setArtwork} 
              /> 


              </div>
                
            {/* ----------- input title of artwork -------------- */}

              <div className="d-block d-xl-flex">
                <div className="col mx-xl-3">

                  <label className="d-flex default-lable my-2 mx-4">عنوان اثر</label>
                  <Form.Item
                    {...formItemLayout}
                    name="artwork_title"
                    rules={[
                      {
                        required: true,
                        message: "عنوان اثر را وارد نکرده‌اید!",
                      },
                    ]}
                  >
                    <Input
                      className="default-input"
                      placeholder="عنوان اثر را وارد نمایید"
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
                        message: "نام هنرمند را وارد نکرده‌اید!",
                      },
                    ]}>
                    <Input
                      className="default-input"
                      placeholder="Enter artist name"
                    />
                  </Form.Item>
                </div>
              </div>

            {/* --------------- input select categories --------------- */}
              <div className="d-flex">
                <div className="col">

                  <label className="d-flex default-lable my-2 mx-4">دسته‌بندی محصول</label>
                  <Form.Item
                    {...formItemLayout}
                    name="category_id"
                    rules={[
                      {
                        required: true,
                        message: "دسته‌بندی محصول را وارد نکرده‌اید!",
                         },
                    ]}>
                        <Select    
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' , }}
                            placeholder="Select category artwork"
                            className="multiple-select"
                            onChange={handleSetCategory}
                            optionFilterProp="label"
                            defaultValue={artworkCategories}
                            maxTagCount="responsive"
                            options={categories}
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
                        message: "تخمین قیمت را وارد نکرده‌اید!",
                      },
                      {
                        pattern: /^[\d]{0,15}$/,
                        message: "تنها کاراکتر عددی مجاز است!",
                    },
                    ]}
                  >
                    <InputNumber
                        type="text"
                        placeholder="Please input your estimate price!"
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
                        message: "توضیحات را وارد نکرده‌اید!",
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
                      placeholder="توضیحات را وارد نمایید"
                    />
                  </Form.Item>
                </div>
              </div>

              <div class="row">
                <div class="button-group">
                  <button htmlType="submit" class="btn-default">ویرایش اثر</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default ModalAddNewArtwork;
