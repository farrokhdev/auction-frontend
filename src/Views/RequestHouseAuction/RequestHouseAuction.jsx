import React , {useState , useEffect} from 'react'
import axios from '../../utils/request';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import Spinners from '../../components/Spinners';
import {BASE_URL} from '../../utils';
import {CATEGORIE_ACTIVITY , HOME_AUCITONS, PRE_UPLOAD, SEND_REQUEST_HOUMEAUCTION, UPLOAD} from '../../utils/constant';
import {Select , Mentions , Collapse} from 'antd';
import { failNotification, successNotification } from '../../utils/notification';
import MapSelector from '../../components/MapSelector';
import classnames from 'classnames';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { Option, getMentions } = Mentions;
const { Panel } = Collapse;

function RequestHouseAuction() {

    const [loading , setLoading] = useState(false)
    const [activites , setActivites] = useState([])
    const [homeAuctions, setHomeAuctions] = useState([])
    const [point, setPoint] = useState({})
    const [url_image, setUrl_image] = useState('')
    const [url_image_Key, setUrl_image_Key] = useState('')    
    const [url_file, setUrl_file] = useState('')
    const [url_file_Key, setUrl_file_Key] = useState('')
    const [request, setRequest] = useState({

        home_auction_name: "arsam",
        home_auction_type: "gallery",
        activity_type: [],
        count: 10 , 
        site : '',
        email : '' , 
        phone : '',
        address: "" , 
        media_name_image : '',
        media_name_file : '',
        media_key : '',
        link_telegram : '',
        link_instagram : '',
        link_facebook : '',
    })



    useEffect(() => {
        getCategoryActivities();
        getHomeAuctions();
    }, [])


    const handleRequestImage = async (info) => {

        let func1 = await axios.post(`${BASE_URL}${PRE_UPLOAD}` , {"content_type": "image"}).then(res => {
            setUrl_image(res.data.data.result.upload_url);
            setUrl_image_Key(res.data.data.result.file_key)    
        return res.data.data.result ;
          
        }).catch(err => {
            console.error(err)
        })
    
        // **************************
    
        let func2 = await axios.put(func1?.upload_url).then(res => {

            return res.data.data.result ;

        }).catch(err => {
            console.error(err)
        })
    
        // ***************************
    
        let func3 = await axios.post(`${BASE_URL}${UPLOAD}` , {
    
            "media_path": func1?.upload_url,
            "type": "image",
            "bucket_name": "image",
            "file_key": func1?.file_key
    
        }).then(res => {
                
        }).catch(err => {
            console.error(err)
        })
    

    }




    
    const handleRequestFile = async (info) => {

        let func1 = await axios.post(`${BASE_URL}${PRE_UPLOAD}` , {"content_type": "image"}).then(res => {
            setUrl_file(res.data.data.result.upload_url);
            setUrl_file_Key(res.data.data.result.file_key)    

            console.log("^^^^^^^ ->>>>>", res.data.data.result);
        return res.data.data.result ;
          
        }).catch(err => {
            console.error(err)
        })
    
        // **************************
    
        let func2 = await axios.put(func1?.upload_url).then(res => {

            return res.data.data.result ;

        }).catch(err => {
            console.error(err)
        })
    
        // ***************************
    
        let func3 = await axios.post(`${BASE_URL}${UPLOAD}` , {
    
            "media_path": func1?.upload_url,
            "type": "image",
            "bucket_name": "image",
            "file_key": func1?.file_key
    
        }).then(res => {
                
        }).catch(err => {
            console.error(err)
        })
    

    }




    const getCategoryActivities = () => {
        axios.get(`${BASE_URL}${CATEGORIE_ACTIVITY}`).then(res => {
            console.log(res);
            setActivites(res.data.data.result)
        }).catch(err => {
            console.error(err)
        })
    }   
    
    const getHomeAuctions = () => {
        axios.get(`${BASE_URL}${HOME_AUCITONS}`).then(res => {
            console.log(res);
            setHomeAuctions(res.data.data.result)
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
    


        const handleSubmit = (e) => {

            e.preventDefault();
            let info_links =  [] ;

            info_links = [
                {
                    "type": "telegram",
                    "url": request?.link_telegram 
                },
                {
                    "type": "instagram",
                    "url": request?.link_instagram 
                },{
                    "type": "facebook",
                    "url": request?.link_facebook 
                }
            ].filter( item=> item.url )



            let payload = {
                "home_auction_name": request?.home_auction_name ,
                "home_auction_type": request?.home_auction_type,
                "activity_type": request?.activity_type,
                "count": parseInt(request?.count),
                "home_auction_location": {
                    "point": {
                        "longitude": point?.longitude ? String(point?.longitude) : '',
                        "latitude": point?.latitude  ? String(point?.latitude) : ''
                    },
                    "address": request?.address ? request?.address : ''
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

                "phone" : request?.phone  ?  request?.phone  :  '',
            }


            axios.put(`${BASE_URL}${SEND_REQUEST_HOUMEAUCTION}` , payload).then(res => {
                console.log(res.data.data.statusCode);
                    successNotification("ثبت درخواست خانه حراجی"  , 'درخواست  با موفقیت ارسال شد')
               
            }).catch(err => {
                // console.error("Error",err.response.data.data)
                failNotification( 'خالی بودن یا نامعتبر بودن فیلدها' , '' )
            })
        }


    function callback(key) {
        console.log(key);
    }

    const handleSetNameImage = (upload) => {
        setRequest({...request , media_name_image : upload?.file?.name });
    }

    const handleSetNameFile = (upload) => {
        setRequest({...request , media_name_file : upload?.file?.name });
    }

return (
    <React.Fragment>

        <Spinners loading={loading}/>
        <HeaderPanel titlePage = {"درخواست خانه حراج"} />
        <main>
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

                                                <input  
                                                    onChange={(e)=> setRequest(
                                                        {...request , home_auction_name : e.target.value}
                                                    )} 
                                                    type="text" 
                                                    // maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
                                                     />
                                               
                                            {/* <select 
                                                onChange={(e)=>handleSetAuctionName(e.target.value)} 
                                                className="form-select" 
                                                placeholder="نام خانه حراجی را انتخاب کنید"
                                                aria-label="Default select example" 
                                                required={true}
                                            >
                                                <option value="none" selected disabled hidden ></option>
                                                {homeAuctions?.length ? homeAuctions?.map(home => (
                                                    <React.Fragment key={home?.id}>
                                                        <option >{home?.home_auction_name}</option>
                                                    </React.Fragment>
                                            )) : ''}
                                                
                                            </select> */}
                                        </div>
                                            
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">نوع کاربری</label>


                                                <select 
                                                    onChange={(e)=>handleSetHomeType(e.target.value)} 
                                                    className="form-select" 
                                                    aria-label="Default select example" 
                                                    required={true}
                                                >
                                                    <option value="none" selected disabled hidden ></option>
                                                    <option value="collector">مجموعه دار</option>
                                                    <option value="gallery">گالری دار</option>
                                                    <option value="home_auction">خانه حراجی</option>
                                           
                                                </select>

                                            </div>
                                        </div>              
                                        
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">حوزه فعالیت خانه حراج</label>


                                            <Select    
                                                mode="multiple"
                                                allowClear
                                                style={{ width: '100%' }}
                                                placeholder=""
                                                defaultValue={[]}
                                                className="multiple-select"
                                                onChange={handleSetActivityType}
                                            >
                                                
                                                {activites.length >= 1 ? activites.map(activity => (

                                                    <React.Fragment key={activity?.id}>
                                                        <Option onChange={(e)=>console.log(e.target.value)}  value={`${parseInt(activity?.id)}`}>{activity?.title}</Option>
                                                    </React.Fragment>
                                                )) : <Option value="s"></Option>}

                                                    
                                            
                                            </Select>

                                            </div>
                                        </div>


                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">تعداد خانه حراجی</label>
                                                <input  
                                                    onChange={(e)=>setRequest(
                                                        {...request , count : e.target.value})
                                                    } 
                                                    type="number" 
                                                    maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                />
                                            </div>
                                        </div>

                                        {/* <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">سایت</label>

                                                <input  
                                                    onChange={(e)=>setRequest(
                                                        {...request , site : e.target.value}
                                                    )}  
                                                    type="text" 
                                                    // maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
                                                     />
                                            </div>
                                        </div> */}

                                        {/* <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">ایمیل</label>

                                                <input  
                                                    onChange={(e)=>setRequest(
                                                        {...request , email : e.target.value}
                                                    )}  
                                                    type="email" 
                                                    // maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
                                                     />
                                            </div>
                                        </div> */}

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">تلفن</label>

                                                <input  
                                                    onChange={(e)=>setRequest(
                                                        {...request , phone : e.target.value}
                                                    )} 
                                                    type="number" 
                                                    class="default-input"
                                                    placeholder="" 
                                                />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">آدرس</label>

                                                <input  
                                                    onChange={(e)=> setRequest(
                                                        {...request , address : e.target.value}
                                                    )} 
                                                    type="text" 
                                                    class="default-input"
                                                    placeholder="" 
                                                 />
                                            </div>
                                        </div>

                                        <div className={classnames("col-md-6", {
                                                "d-none": (!point?.latitude && !point?.longitude),
                                                })} >
                                            <div class="input-group">
                                                <label class="default-lable">عرض جغرافیایی</label>

                                                <input  
                                                    type="text" 
                                                    readOnly
                                                    class="default-input"
                                                    placeholder="" 
                                                    value={point?.latitude}
                                                     />
                                            </div>
                                        </div>


                                        <div className={classnames("col-md-6", {
                                                "d-none": (!point?.latitude && !point?.longitude),
                                                })}>
                                            <div class="input-group">
                                                <label class="default-lable">طول جغرافیایی</label>

                                                <input  
                                                    type="text" 
                                                    readOnly
                                                    class="default-input"
                                                    placeholder="" 
                                                    value={point?.longitude}
                                                     />
                                            </div>
                                        </div>

                                    </div>

                                


                                    <div className="col">
                                            <MapSelector setPoint={setPoint}/>
                                    </div>

                                    <div className="d-block my-4">
                                        <label className="default-lable mx-3"> بارگذاری عکس </label>
                                        <Upload 
                                            
                                            onChange = {handleSetNameImage}
                                            maxCount={1}
                                            onClick = {handleRequestImage} >
                                                
                                            <Button 
                                             icon={<UploadOutlined />}></Button>
                                        </Upload>
                                    </div>

                                    <div className="d-block my-4">
                                        <label className="default-lable mx-3"> بارگذاری فایل </label>
                                        <Upload
                                            onChange = {handleSetNameFile}
                                            maxCount={1} 
                                            onClick = {handleRequestFile} 
                                        >
                                            <Button   icon={<UploadOutlined />}></Button>
                                        </Upload>
                                    </div>


                                        <Collapse className="mt-5"  onChange={callback}>
                                            <Panel className="mr-3" header="لینک شبکه‌های اجتماعی (اختیاری) " key="1">
                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">لینک تلگرام</label>
                                                        <input  
                                                            onChange={(e)=>setRequest(
                                                                {...request , link_telegram : e.target.value}
                                                            )} 
                                                            type="text" 
                                                            // maxlength ={5}
                                                            class="default-input"
                                                            placeholder="" 
                                                            // value="+98 912 506 3365"
                                                            />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">لینک اینستاگرام</label>

                                                        <input  
                                                            onChange={(e)=> setRequest(
                                                                {...request , link_instagram : e.target.value}
                                                            )} 
                                                            type="text" 
                                                            // maxlength ={5}
                                                            class="default-input"
                                                            placeholder="" 
                                                            // value="+98 912 506 3365"
                                                            />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="input-group">
                                                        <label className="default-lable">لینک فیسبوک</label>
                                                        <input  
                                                            onChange={(e)=>setRequest(
                                                                {...request , link_facebook : e.target.value}
                                                            )} 
                                                            type="text" 
                                                            // maxlength ={5}
                                                            class="default-input"
                                                            placeholder="" 
                                                            // value="+98 912 506 3365"
                                                            />
                                                    </div>
                                                </div>
                                            </Panel>    
                                        </Collapse>

                                    <div class="row">
                                        <div class="col-12 button-group">
                                            <button onClick={handleSubmit} type="submit" class="btn-default">ثبت</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </React.Fragment>
    )
}

export default RequestHouseAuction;