import React, { useState, useEffect } from "react";
import { Modal, Form, Input,InputNumber ,Upload, Select, message } from "antd";
import {PictureOutlined} from "@ant-design/icons";
import UploadAxios from "../../utils/uploadRequest";
import {PRE_UPLOAD} from '../../utils/constant';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import { failNotification, successNotification } from "../../utils/notification";

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
  const [image, setImage] = useState({
      url : '',
      name : '',
      key : '',
      type : '',
  })
  const [categories, setCategories] = useState()
  const [newArtwork, setNewArtwork] = useState({ category_id : []})

useEffect(() => {
    getListCategory()
}, [])


// get list of sub category for show to user and select by users in dropdown to create artwork
const getListCategory = () => {
    axios.get(`${BASE_URL}/sale/category/?title=آثار` ).then(res => {
        setCategories(res.data.data.result[0].children)
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
        "media":[ {
          "media_path": image.url,
          "bucket_name":image.name,
          "file_key": image.key,
          "type": "image",
          "file_name": image.name,
        }],
        "category_id": newArtwork.category_id,
        "offer_home_auction" : "required"
      }

            
            axios.post(`${BASE_URL}/sale/product/` , payload).then(res => {
                console.log(res);
                if(res.data.data.statusCode !== 400){
                    successNotification("ایجاد اثر" , "اثر با موفقیت ایجاد شد")
                }else{
                    failNotification("خطا" , res.data.data.error_message[0])
                }
            }).catch(err => {
                console.error(err);
            })

    
    
  };

  const props = {
    listType: "picture",

    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {

      }
      if (status === "done" && !!image.url) {
        // setUploadList([...uploadList , url_image])
        message.success(`${info.file.name} با موفقیت آپلود شد.`);
      } else if (status === "error") {
        message.error(`آپلود ${info.file.name} با خطا مواجه شد.`);
      }

    },
    

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
                <Dragger
                  {...props}
                  maxCount={1}
                //   onRemove={()=>setUploadList([...uploadList])}
                  customRequest={async (e) => {
                    const { file, onSuccess, onError } = e;

                    await axios
                      .post(`${BASE_URL}${PRE_UPLOAD}`, {
                        content_type: "image",
                      }).then((res) => {
                        onSuccess({ status: "success" });
                        // setUrl_image_Key(res.data.data.result.file_key);

                        setImage({
                            ...image , 
                            key : res.data.data.result.file_key
                        })

                        setNewArtwork({
                          ...newArtwork,
                          
                        });

                        if (
                          res.data.data.result.upload_url &&
                          file?.type.split("/")[0] === "image"
                        ) {
                          UploadAxios.put(res.data.data.result.upload_url, file)
                          .then((res) => {

                            setImage({
                                ...image , 
                                url : res.config.url , 
                                name : file.name , 
                                type : file.type
                            })

                            }).catch((err) => {
                              console.error(err);
                            });
                        } else {
                            setImage({});
                        }
                      })
                      .catch((err) => {
                        console.error(err);
                        onError({ status: "error" });
                      });
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <PictureOutlined className="img-icon-upload-add-new-artwork" />
                  </p>
                  <p className="ant-upload-text">
                    تصاویر خود را در اینجا رها کنید
                  </p>
                </Dragger>
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
                            defaultValue={[]}
                            className="multiple-select"
                            onChange={handleSetCategory}
                        >
                                                
                        {categories?.length >= 1 ? categories?.map(category => (

                            <React.Fragment key={category?.id}>
                                <Select.Option   value={`${category?.id}`}>{category?.title}</Select.Option>
                            </React.Fragment>
                        )) : <Select.Option value=""></Select.Option>}

                                                    
                                            
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
                        // pattern: /~[a-zA-Z0-9]/g,
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
