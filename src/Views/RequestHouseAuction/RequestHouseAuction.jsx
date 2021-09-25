import React , {useState , useEffect} from 'react'
import axios from '../../utils/request';
import UploadAxios from "../../utils/uploadRequest";
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import Spinners from '../../components/Spinners';
import {BASE_URL} from '../../utils';
import {CATEGORIE_ACTIVITY , PRE_UPLOAD, SEND_REQUEST_HOUMEAUCTION, UPLOAD} from '../../utils/constant';
import {Select , Mentions , Collapse , Form , Input , Upload , Button , Alert } from 'antd';
import { failNotification, successNotification } from '../../utils/notification';
import MapSelector from '../../components/MapSelector';
import classnames from 'classnames';
import { UploadOutlined } from '@ant-design/icons';

const { Option, getMentions } = Mentions;
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
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}`).then(res => {
            console.log(res);
            setActivites(res.data.data.result)
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
    
    const handleSetHomeType = (value) => {
        setRequest({
            ...request , 
            home_auction_type : value
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
                    successNotification("ثبت درخواست خانه حراجی"  , 'درخواست  با موفقیت ارسال شد')
                }
               
            }).catch(err => {
                failNotification("خطا در ارسال درخواست",err.response.data.data.error_message[0])
                
            })
        }


    function callback(key) {
        console.log(key);
    }


    const handleSetNameFile = (upload) => {
        setRequest({...request , media_name_file : upload?.file?.name });
    }

    form.setFieldsValue({
        longitude : point?.longitude ,
        latitude : point?.latitude  ,
    })

return (
    <React.Fragment>

        <Spinners loading={loading}/>
        <HeaderPanel titlePage = {"درخواست خانه حراج"} />
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
                                                <label class="default-lable">نام خانه حراج</label>
                                                <Form.Item
                                                        className="w-100"
                                                        name="home_auction_name"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "نام خانه حراجی را وارد نشده است!",
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
                                                <label class="default-lable">نوع کاربری</label>

                                                    <Form.Item
                                                        className="w-100"
                                                        name="home_auction_type"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "نوع کاربری انتخاب نشده است!",
                                                            },
                                                        ]}>
                                                    <Select
                                                        className="search-input w-100 fs-6"
                                                        size="large"
                                                        dropdownClassName="text-right"
                                                        placeholder="نوع  حراجی را انتخاب کنید"
                                                        onChange={(e)=> 
                                                            setRequest(
                                                            {...request , home_auction_type : e}
                                                        )}
                                                    >
                                                        <Select.Option value="none" selected disabled hidden ></Select.Option>
                                                        <Select.Option value="collector">مجموعه دار</Select.Option>
                                                        <Select.Option value="gallery">گالری دار</Select.Option>
                                                        <Select.Option value="home_auction">خانه حراجی</Select.Option>
                                                    </Select>
                                                </Form.Item>

                                            </div>
                                        </div>              
                                        
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">حوزه فعالیت خانه حراج</label>
                                                <Form.Item
                                                        className="w-100"
                                                        name="activity_type"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "حوزه فعالیت انتخاب نشده است!",
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
                                                        <Select.Option   value={`${parseInt(activity?.id)}`}>{activity?.title}</Select.Option>
                                                    </React.Fragment>
                                                )) : <Select.Option value="s"></Select.Option>}

                                                    
                                            
                                            </Select>
                                            </Form.Item>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">تلفن</label>

                                                <Form.Item
                                                        className="w-100"
                                                        name="phone"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "تلفن وارد نشده است!",
                                                            },
                                                            {
                                                                pattern: /^[\d]{0,14}$/,
                                                                message: "تنها کاراکتر عدد معتبر می‌باشد!",
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
                                                <label class="default-lable">آدرس</label>

                                                <Form.Item
                                                    className="w-100"
                                                    name="address"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "آدرس وارد نشده است!",
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
                                                        <label class="default-lable">عرض جغرافیایی</label>

                                                        <Form.Item
                                                            className="w-100"
                                                            name="longitude"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "عرض جغرافیایی انتخاب نشده!",
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
                                                        <label class="default-lable">طول جغرافیایی</label>
                                                            <Form.Item
                                                                className="w-100"
                                                                name="latitude"
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: "طول جغرافیایی وارد نشده است!",
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
                                            <p className="mb-0">لطفا عکس گالری خود را بارگذاری کنید</p>

                                        </div>


                                        <Alert className={classnames("", {
                                            "d-none": url_image ,
                                        })}  message="شما باید یک عکس بارگذاری کنید!" type="error" showIcon />                                        
                                        <div className="d-flex mt-4">
                                        <label className="default-lable mx-3 "> بارگذاری عکس </label>
                                        <Form.Item
                                            name="upload-image"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "عکس بارگذاری نشده است!",
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
                                            <p className="mb-0">لطفا فایل مدارک مربوطه خود را بارگذاری کنید</p>
                                        </div>

                                       <div className="d-flex">
                                        <label className="default-lable mx-3"> بارگذاری فایل </label>
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
                                            <Panel className="mr-3" header="لینک شبکه‌های اجتماعی (اختیاری) " key="1">
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">لینک تلگرام</label>
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
                                                        <label className="default-lable">لینک اینستاگرام</label>
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
                                                        <label className="default-lable">لینک فیسبوک</label>
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
                                                class="btn-default">ثبت</button>
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