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
    const [url, setUrl] = useState('')
    const [urlKey, setUrlKey] = useState('')
    const [request, setRequest] = useState({

        home_auction_name: "arsam",
        home_auction_type: "gallery",
        activity_type: [],
        count: 10 , 
        site : '',
        email : '' , 
        phone : '',
        address: "" , 
        media_name : '',
        media_type : '',
        media_path : '',
        media_key : '',
        link_telegram : '',
        link_instagram : '',
        link_facebook : '',
    })


    // const props = {
    //     action: `${BASE_URL}${UPLOAD}`,
    //     listType: 'picture',
    //     previewFile(file) {
    //       console.log('Your upload file:', file);
    //       // Your process logic. Here we just mock to the same file
    //       return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    //         method: 'POST',
    //         body: file,
    //       })
    //         .then(res => res.json())
    //         .then(({ thumbnail }) => thumbnail);
    //     },
    //   };



    useEffect(() => {
        getCategoryActivities();
        getHomeAuctions();
        // requestImageUrl();
    }, [])

    // const requestImageUrl = () => {
    //     let payload = {"content_type" : "image"}
    //     axios.post(`${BASE_URL}${UPLOAD}` , payload).then(res => {
    //         setUrl(res.data.data.result.upload_url);
    //         setUrlKey(res.data.data.result.file_key)
    //     }).catch(err => {
    //         console.error(err)
    //     })
    // }

    console.log("URL ->>>>> " , url);


    

    const handleRequest = async (info) => {

        let func1 = await axios.post(`${BASE_URL}${PRE_UPLOAD}` , {"content_type": "image"}).then(res => {
            setUrl(res.data.data.result.upload_url);
            setUrlKey(res.data.data.result.file_key)

            console.log("**** ---???? ",res.data.data.result);
    
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



    
    // const addMedia = (payload) => {
    
    //     axios.put(url , payload).then(res => {
    //         console.log(res);
    //     }).catch(err => {
    //         console.error(err)
    //     })
    // }



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
        // let a = request.activity_type
        // a.append(parseInt(value))


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
                    "address": request?.address
                },
                "info_link": [
                    {
                        "type": "instagram",
                        "url": request?.link_instagram ? request?.link_instagram : ''
                    },
                    {
                        "type": "facebook",
                        "url": request?.link_facebook ? request?.link_facebook  : ''
                    },
                    {
                        "type": "telegram",
                        "url": request?.link_telegram ? request?.link_telegram : ''
                    }
                ],
                "media": {
                    "media_path": url ? url : '',
                    "type": "image",
                    "bucket_name": "image",
                    "file_key": urlKey ? urlKey : ''
                },

                "site"  : request?.site   ?  request?.site   :  '',
                "phone" : request?.phone  ?  request?.phone  :  '',
                "email" : request?.email  ?  request?.email  :  '',
            }


            axios.put(`${BASE_URL}${SEND_REQUEST_HOUMEAUCTION}` , payload).then(res => {
                console.log(res.data.data.statusCode);
                    successNotification("ثبت درخواست خانه حراجی"  , 'درخواست  با موفقیت ارسال شد')
               
            }).catch(err => {
                console.error("Error",err.response.data.data)
                failNotification( 'خالی بودن یا نامعتبر بودن فیلدها' , '' )
            })
        }




        // function getBase64(img, callback) {
        //     const reader = new FileReader();
        //     reader.addEventListener('load', () => callback(reader.result));
        //     reader.readAsDataURL(img);
        //   }


        //   const handleChange = (info ) => {
 
        //       getBase64(info.file.originFileObj, imageUrl => ({imageUrl}));
        //     console.log("Info_name -->>> " , info.file.name);
        //     setRequest({...request , media_name : info.file.name})
        //   };

        function callback(key) {
            console.log(key);
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
                                                    // value="+98 912 506 3365"
                                                     />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
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
                                        </div>

                                        <div class="col-md-6">
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
                                        </div>

                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">تلفن</label>

                                                <input  
                                                    onChange={(e)=>setRequest(
                                                        {...request , phone : e.target.value}
                                                    )} 
                                                    type="number" 
                                                    // maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
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
                                                    // maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
                                                     />
                                            </div>
                                        </div>

                                        

                                        

                                        <div className={classnames("col-md-6", {
                                                "d-none": (!point?.latitude && !point?.longitude),
                                                })} >
                                            <div class="input-group">
                                                <label class="default-lable">عرض جغرافیایی</label>

                                                <input  
                                                    // onChange={(e)=> setRequest(
                                                    //     {...request , latitude : point?.latitude}
                                                    // )} 
                                                    type="text" 
                                                    readOnly
                                                    // maxlength ={5}
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
                                                    // onChange={(e) => setRequest(
                                                    //     {...request , longitude : point?.longitude}
                                                    // )}
                                                    type="text" 
                                                    // maxlength ={5}
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
                                        <label className="default-lable mx-3"> بارگذاری فایل </label>
                                        <Upload onClick = {handleRequest} >
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