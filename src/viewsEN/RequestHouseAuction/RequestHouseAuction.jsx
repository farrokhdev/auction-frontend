import React , {useState , useEffect} from 'react'
import axios from '../../utils/request';
import UploadAxios from "../../utils/uploadRequest";
import HeaderPanel from '../../componentsEN/HeaderPanel';
import PanelSidebar from '../../componentsEN/PanelSideBar';
import Spinners from '../../components/Spinners';
import {BASE_URL} from '../../utils';
import {CATEGORIE_ACTIVITY , PRE_UPLOAD, SEND_REQUEST_HOUMEAUCTION, UPLOAD} from '../../utils/constant';
import {Select , Mentions , Collapse , Form , Input , Upload , Button , Alert } from 'antd';
import { failNotification, successNotification } from '../../utils/notification';
import MapSelector from '../../components/MapSelector';
import classnames from 'classnames';
import { UploadOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

function RequestHouseAuction() {

    const [form] = Form.useForm();

    const [loading , setLoading] = useState(false)
    const [activites , setActivites] = useState([])
    const [point, setPoint] = useState({})
    const [url_image, setUrl_image] = useState(' ')
    const [url_image_Key, setUrl_image_Key] = useState('')    
    const [url_file, setUrl_file] = useState('')
    const [url_file_Key, setUrl_file_Key] = useState('')
    const [request, setRequest] = useState({

        home_auction_name: "",
        home_auction_type: "",
        activity_type: [],
        site : "",
        phone : "",
        address: "" , 
        media_name_image : "",
        media_name_file : "",
        media_key : "",
        longitude : '',
        latitude : '' ,
        link_telegram : "",
        link_instagram : "",
        link_facebook : "",
    })


    useEffect(() => {
        getCategoryActivities();
    }, [])


    const getCategoryActivities = () => {
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}?title=خانه های حراج`).then(res => {
            setActivites(res.data.data.result[0].children)
        }).catch(err => {
            console.error(err)
        })
    }   
    
    

    const handleSetActivityType = (value) =>{
        setRequest({
            ...request , 
            activity_type : value
        })
    }
    
    const onFinish = (values) => {
        console.log(values)
         
            let info_links =  [] ;

            info_links = [
                {
                    "type": "telegram",
                    "url": values?.link_telegram 
                },
                {
                    "type": "instagram",
                    "url": values?.link_instagram 
                },{
                    "type": "facebook",
                    "url": values?.link_facebook 
                }
            ].filter( item=> item.url )



            let payload = {
                "home_auction_name": values?.home_auction_name ,
                "home_auction_type": values?.home_auction_type,
                "activity_type": values?.activity_type,
                "home_auction_location": {
                    "point": {
                        "longitude": values?.longitude ? String(values?.longitude) : '',
                        "latitude": values?.latitude  ? String(values?.latitude) : ''
                    },
                    "address": values?.address ? values?.address : ''
                },
               
                "info_link" : info_links,

                "media": [
                    {
                        "media_path": url_image ? url_image : '',
                        "type": "profile_image",
                        "bucket_name": "image",
                        "file_key": url_image_Key ? url_image_Key : '',
                        "file_name": request?.media_name_image ? request?.media_name_image : ''
                    },
                    {
                        "media_path": url_file ? url_file : '' ,
                        "type": "rar",
                        "bucket_name": "image",
                        "file_key": url_file_Key ? url_file_Key : '',
                        "file_name": request?.media_name_file ? request?.media_name_file : ''
                    }
                ],

                "phone" : values?.phone  ?  values?.phone  :  '',
            }


            axios.put(`${BASE_URL}${SEND_REQUEST_HOUMEAUCTION}` , payload).then(res => {

                if(res.data.data.statusCode !== 400){
                    successNotification('Submit your auction house request'  , 'The request was sent successfully')
                }
               
            }).catch(err => {
                failNotification('Error sending request',err.response.data.data.error_message[0])
                
            })
        }


    function callback(key) {
        console.log(key);
    }


    form.setFieldsValue({
        longitude : point?.longitude ,
        latitude : point?.latitude  ,
    })

return (
    <React.Fragment>

        <Spinners loading={loading}/>
        <HeaderPanel titlePage = {"Request an auction house"} />
        <main>
        <Form 
                onFinish={onFinish}
                initialValues={{ remember: true }}

              form={form}
              wrapperCol={{span: 24}}>
            <div class="panel-main">
                <PanelSidebar />
                <div class="panel-body">
                    <div class="panel-container">
       
                        <div class="col-xxl-8">
                        
                            <div class="tab-content" id="profile-tab-content">
                                <div class="tab-pane fade  show active" id="profiletab1" role="tabpanel"
                                    aria-labelledby="profiletab1-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">House auction name</label>
                                                <Form.Item
                                                        className="w-100"
                                                        name="home_auction_name"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "The name of the auction house is not entered!",
                                                            },
                                                        ]}>
                                                <Input 
                                                    className="default-input" 
                                                    onChange={(e)=> setRequest(
                                                        {...request , home_auction_name : e.target.value}
                                                    )} 
                                                    type="text" 
                                                    class="default-input"
                                                    placeholder="" 
                                                     />
                                               </Form.Item>

                                        </div>
                                            
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">Account Type</label>

                                                    <Form.Item
                                                        className="w-100"
                                                        name="home_auction_type"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "User type not selected!",
                                                            },
                                                        ]}>
                                                    <Select
                                                        className="search-input w-100 fs-6"
                                                        size="large"
                                                        dropdownClassName="text-right"
                                                        placeholder="Select the type of auction"
                                                        onChange={(e)=> 
                                                            setRequest(
                                                            {...request , home_auction_type : e}
                                                        )}
                                                    >
                                                        <Select.Option value="none" selected disabled hidden ></Select.Option>
                                                        <Select.Option value="collector">collector</Select.Option>
                                                        <Select.Option value="gallery">gallery</Select.Option>
                                                        <Select.Option value="home_auction">home auction</Select.Option>
                                                    </Select>
                                                </Form.Item>

                                            </div>
                                        </div>              
                                        
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">Scope of the house auction </label>
                                                <Form.Item
                                                        className="w-100"
                                                        name="activity_type"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Scope of the house auction not selected !",
                                                            },
                                                        ]}>

                                            <Select    
                                                mode="multiple"
                                                allowClear
                                                style={{ width: '100%' }}
                                                placeholder=""
                                                defaultValue={[]}
                                                className="multiple-select"
                                                onChange={handleSetActivityType}
                                            >
                                                
                                                {activites?.length >= 1 ? activites?.map(activity => (

                                                    <React.Fragment key={activity?.id}>
                                                        <Select.Option   value={`${parseInt(activity?.id)}`}>{activity?.title_en}</Select.Option>
                                                    </React.Fragment>
                                                )) : <Select.Option value=""></Select.Option>}

                                                    
                                            
                                            </Select>
                                            </Form.Item>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">phone</label>

                                                <Form.Item
                                                        className="w-100"
                                                        name="phone"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Phone not Entered!",
                                                            },
                                                            {
                                                                pattern: /^[\d]{0,14}$/,
                                                                message: "Only the number character is valid!",
                                                            },
                                                        ]}>

                                                <Input 
                                                    className="default-input"
                                                    // pattern = {/^[\d]{0,11}$/}
                                                    maxLength={11}
                                                    onChange={(e)=>setRequest(
                                                        {...request , phone : e.target.value},
                                                    )} 
                                                    type="text" 
                                                    class="default-input"
                                                    placeholder="" 
                                                />
                                            </Form.Item>

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">address</label>

                                                <Form.Item
                                                    className="w-100"
                                                    name="address"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "address not Entered!",
                                                        },
                                                    ]}>

                                                <Input 
                                                    className="default-input" 
                                                    onChange={(e)=> setRequest(
                                                        {...request , address : e.target.value}
                                                    )} 
                                                    type="text" 
                                                    class="default-input"
                                                    placeholder="" 
                                                />

                                                 </Form.Item>
                                            </div>
                                        </div>

                                        

                                    </div>

                                


                                    <div className="col">

                                            <div className="d-block d-md-flex justify-content-md-between">
                                                <div 
                                                    className="col-md-5 ml-md-4"
                                                    >
                                                    <div class="input-group mb-0">
                                                        <label class="default-lable">latitude</label>

                                                        <Form.Item
                                                            className="w-100"
                                                            name="latitude"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Latitude not selected!",
                                                                },
                                                            ]}>
                                                        <Input  
                                                            className="default-input"
                                                            type="text" 
                                                            readOnly
                                                            class="default-input"
                                                            placeholder="" 
                                                            // value={request?.longitude ? request?.longitude : ''}
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                </div>

                                                <div 
                                                    className="col-md-5">
                                                    <div class="input-group mb-0">
                                                        <label class="default-lable">Longitude</label>
                                                            <Form.Item
                                                                className="w-100"
                                                                name="longitude"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: "Longitude not selected!",
                                                                    },
                                                                ]}>
                                                            <Input
                                                            
                                                                className="default-input"
                                                                type="text" 
                                                                readOnly
                                                                class="default-input"
                                                                placeholder="" 
                                                                // value={request?.latitude ? request?.latitude : ''}
                                                                
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <MapSelector point={point} setPoint={setPoint}/>
                                    </div>

                                    <div className="d-block my-4">

                                        <div className="d-flex my-4 pb-3 border-bottom">
                                            <p className="mb-0">Please upload your gallery photo</p>

                                        </div>


                                        <Alert className={classnames("", {
                                            "d-none": url_image ,
                                        })}  message="You must upload a photo!" type="error" showIcon />                                        
                                        <div className="d-flex mt-4">
                                        <label className="default-lable mx-3 ">upload photo </label>
                                        <Form.Item
                                            name="upload-image"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Photo not uploaded!",
                                                },
                                           
                                            ]}
                                        >
                                        <Upload 
                                   
                                            onRemove={()=>setUrl_image('')}
                                            maxCount={1}
                                            customRequest = {
                                                async(e)  => {
                                                    const {file ,onSuccess , onError} = e;

                                                 
                                                        await axios.post(`${BASE_URL}${PRE_UPLOAD}` , {"content_type": "image"})
                                                        .then(res => {

                                                            onSuccess({'status' : 'success'})
                                                            setUrl_image_Key(res.data.data.result.file_key);
                                                            setRequest({...request , media_name_image : file?.name }); 
                                                                
                                                            if(res.data.data.result.upload_url && file?.type.split('/')[0] === 'image'){

                                                                UploadAxios.put(res.data.data.result.upload_url , file)
                                                                .then(res => {
                                                                    setUrl_image(res.config.url)    
                                                                }).catch(err => {
                                                                    console.error(err)
                                                                })

                                                            }else{
                                                                setUrl_image('')
                                                            }
    
                                                        }).catch(err => {
                                                            console.error(err)
                                                            onError({'status' : 'error'})
                                                        })
                                             
                                        
                                                }
                                            }
                                            >
                                            <Button 
                                             icon={<UploadOutlined />}></Button>
                                        </Upload>
                                    </Form.Item>  
                                        </div>

                                    </div>

                                    <div className="d-block my-4">

                                    <div className="d-flex my-4 pb-3 border-bottom">
                                            <p className="mb-0">Please upload your relevant documentation file</p>
                                        </div>

                                       <div className="d-flex">
                                        <label className="default-lable mx-3"> Upload file</label>
                                       <Form.Item
                                            name="upload-file"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "!",
                                                },
                                            ]}
                                        >
                                        <Upload
                                            onRemove={()=>setUrl_file('') }
                                            maxCount={1} 
                                            customRequest = {
                                                async(e)  => {
                                                    const {file ,onSuccess , onError} = e;
                                                    await axios.post(`${BASE_URL}${PRE_UPLOAD}` , {"content_type": "image"})
                                                    .then(res => {
                                                        onSuccess({'status' : 'success'})
                                                        
                                                        setRequest({...request , media_name_file : file?.name }); 

                                                        setUrl_file_Key(res.data.data.result.file_key);
                                                        if(res.data.data.result.upload_url){
                                                            UploadAxios.put(res.data.data.result.upload_url)
                                                            .then(res => {
                                                                setUrl_file(res.config.url);
                                                            }).catch(err => {
                                                                console.error(err)
                                                            })
                                                        }
                                                        
                                             
                                                    }).catch(err => {
                                                        console.error(err)
                                                        onError(err)
                                                    })

                                          

                                                }
                                            }
                                        >
                                            <Button   icon={<UploadOutlined />}></Button>
                                        </Upload>
                                        </Form.Item>
                                       </div>
                                    </div>


                                        <Collapse className="mt-5"  onChange={callback}>
                                            <Panel className="mr-3" header="Social network links (optional)" key="1">
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">Telegram link</label>
                                                        <Form.Item
                                                            className="w-100"
                                                            name="link_telegram"
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    message: "",
                                                                },
                                                            ]}
                                                        >
                                                        <Input  
                                               
                                                            type="text" 
                                                            className="default-input"
                                                            placeholder="" 
                                                            onChange={(e)=> 
                                                                setRequest(
                                                                {...request , link_telegram : e.target.value}
                                                            )}
                                                            />
                                                    </Form.Item>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">Instagram link</label>
                                                        <Form.Item
                                                            className="w-100"
                                                            name="link_instagram"
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    message: "",
                                                                },
                                                            ]}
                                                        >
                                                        <Input   
                                                            type="text" 
                                                            className="default-input"
                                                            placeholder="" 
                                                            onChange={(e)=> 
                                                                setRequest(
                                                                {...request , link_instagram : e.target.value}
                                                            )}

                                                             
  
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">Faceboock link</label>
                                                        <Form.Item
                                                            className="w-100"
                                                            name="link_facebook"
                                                            rules={[
                                                                {
                                                                    required: false,
                                                                    message: "",
                                                                },
                                                            ]}
                                                        >
                                                        <Input   
                                                            type="text" 
                                                            className="default-input"
                                                            placeholder="" 
                                                            onChange={(e)=> setRequest({
                                                                ...request , link_facebook : e.target.value
                                                            })}
                                                            />
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                            </Panel>    
                                        </Collapse>

                                    <div class="row">
                                        <div class="col-12 button-group">
                                            <button 
                                                htmlType="submit"
                                                disabled={
                                                    !url_image   ||
                                                    !request?.home_auction_name ||
                                                    !request?.activity_type?.length ||
                                                    !request?.home_auction_type ||
                                                    !request?.address ||
                                                    !request?.phone ||
                                                    !point?.longitude ||
                                                    !point?.latitude
                                                } 
                                                class="btn-default">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Form>
        </main>
        
    </React.Fragment>
    )
}

export default RequestHouseAuction;