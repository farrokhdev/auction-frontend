import React, { useState, useEffect } from "react";
import { Modal, Form, Input,InputNumber ,Upload, Select, message } from "antd";
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
// const [form] = Form.useForm();

function ModalAddNewArtwork({ setVisibleAddNewArtwork, visibleAddNewArtwork , setARTWORK_ID}) {

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
        ({label : item.title_en , value : item?.id })) ])

    }).catch(err => {
        console.error(err);
    })
}


  const onFinish = (values) => {
    console.log(values);

    let payload = {
        "artwork_title": values.artwork_title_en,
        "artwork_title_en": values.artwork_title_en,
        "english_artist_name": values.english_artist_name,
        "english_description": values.english_description,
        "price": values.price,
        "media" : uploadList,
        "category_id": newArtwork.category_id,
        "offer_home_auction" : "required"
      }

            
            axios.post(`${BASE_URL}/sale/product/` , payload).then(res => {
                console.log(res);
                if(res.data.data.statusCode !== 400){
                    successNotification("Create artwork" , "The artwork was created successfully")
                    setTimeout(() => {
                      setVisibleAddNewArtwork(false)
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
        title="Create new artwork"
        centered
        className="modal-add-new-artwork-en"
        visible={visibleAddNewArtwork}
        onOk={() => setVisibleAddNewArtwork(false)}
        onCancel={() => setVisibleAddNewArtwork(false)}
        width={800}
        footer={[]}
      >

    <div class=" border-0 p-4">
        <Form
          name="add-new-artwork "
          form={form}
          {...formItemLayout}
          onFinish={onFinish}
        > 
          <div className="row ">
            <div className="col w-100">
              <div className="d-block">


              <MultipleUpload  
                uploadList={uploadList} 
                setUploadList={setUploadList} 
              />


              </div>
                
            {/* ----------- input title of artwork -------------- */}

              <div className="d-block d-xl-flex">
                <div className="col mx-xl-3">

                  <label className="d-flex default-lable my-2 mx-4">Artwork title</label>
                  <Form.Item
                    {...formItemLayout}
                    name="artwork_title_en"
                    rules={[
                      {
                        required: true,
                        message: "Please input your artwork title!",
                      },
                    ]}
                  >
                    <Input
                      className="default-input"
                      placeholder="Enter artwork title"
                    />
                  </Form.Item>

                </div>

                <div className="col mx-xl-3">

                  <label className="d-flex default-lable my-2 mx-4">Artist</label>
                  <Form.Item
                    {...formItemLayout}
                    name="english_artist_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your artist name!",
                      },
                      {
                        pattern:
                          /^[a-zA-Z0-9/)/(\\÷×'":;|}{=`~,<>/\-$@$!%*?&#^_. +]+$/,
                        message: "Only English characters are allowed!",
                      }
                      
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

                  <label className="d-flex default-lable my-2 mx-4">Category artwork</label>
                  <Form.Item
                    {...formItemLayout}
                    name="category_id"
                    rules={[
                      {
                        required: true,
                        message: "Please input your category!",
                         },
                    ]}>
                        <Select    
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' , }}
                            placeholder="Select category artwork"
                            optionFilterProp='value'
                            options={categories}
                            className="multiple-select"
                            onChange={handleSetCategory}
                            // onSearch={(e)=>getMembers({search : e})}
                            maxTagCount = 'responsive'
                        >
                                                                                
                    </Select>
                  </Form.Item>
                </div>
              </div> 

              {/* --------------- input price artwork --------------- */}             
              
              <div className="d-flex">
                <div className="col">

                  <label className="d-flex default-lable my-2 mx-4">Estimate price</label>
                  <Form.Item
                    {...formItemLayout}
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "input your price is empty or invalid!",
                      },
                      {
                        pattern: /^[\d]{0,15}$/,
                        message: "Only the number character is valid!",
                    },
                    ]}
                  >
                    <InputNumber
                        type="text"
                        placeholder="Enter Estimate price"
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

                  <label className="d-flex default-lable my-2 mx-4">Description</label>
                  <Form.Item
                    {...formItemLayout}
                    name="english_description"
                    rules={[
                      {
                        required: false,
                        message: "Please input your description!",
                      },
                      {
                        pattern: /^[a-zA-Z0-9/)/(\\÷×'":;|}{=`~,<>/\-$@$!%*?&#^_. +]+$/,
                        message: "Only English characters are allowed!",
                    }
                    ]}
                  >
                    <Input.TextArea
                      className="default-input pt-2"
                      rows={4}
                      placeholder="Enter description"
                    />
                  </Form.Item>
                </div>
              </div>

              <div class="row">
                <div class="button-group">
                  <button htmlType="submit" class="btn-default">Create artwork</button>
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
