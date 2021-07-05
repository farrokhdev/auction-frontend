import React , {useState , useEffect} from 'react'
import axios from '../../utils/request';
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import Spinners from '../../components/Spinners';
import {BASE_URL} from '../../utils';
import {CATEGORIE_ACTIVITY , HOME_AUCITONS, SEND_REQUEST_HOUMEAUCTION} from '../../utils/constant';
import {Select , Mentions} from 'antd';
import { failNotification, successNotification } from '../../utils/notification';

const { Option, getMentions } = Mentions;

function RequestHouseAuction() {

    const [loading , setLoading] = useState(false)
    const [activites , setActivites] = useState([])
    const [homeAuctions, setHomeAuctions] = useState([])
    const [request, setRequest] = useState({

        home_auction_name: "arsam",
        home_auction_type: "gallery",
        activity_type: [],
        count: 10
    })


    useEffect(() => {
        getCategoryActivities();
        getHomeAuctions();
    }, [])

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

    const handleSetAuctionName = (value) => {
        setRequest({
            ...request , 
            home_auction_name : value
        })
    }

    const handleSetCount = (value) => {
        setRequest({
            ...request , 
            count : value
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

            let payload = {
                "home_auction_name": request?.home_auction_name ,
                "home_auction_type": request?.home_auction_type,
                "activity_type": request?.activity_type,
                "count": request?.count
            }


            axios.put(`${BASE_URL}${SEND_REQUEST_HOUMEAUCTION}` , payload).then(res => {
                console.log(res.data.data.statusCode);
                    successNotification("ثبت درخواست خانه حراجی"  , 'درخواست  با موفقیت ارسال شد')
               
            }).catch(err => {
                console.error("Error",err.response.data.data)
                failNotification( 'خالی بودن یا نامعتبر بودن فیلدها' , '' )
            })
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
                                               
                                            <select 
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
                                                
                                            </select>
                                        </div>
                                            
                                        </div>
                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">نوع خانه حراج</label>


                                                <select 
                                                    onChange={(e)=>handleSetHomeType(e.target.value)} 
                                                    className="form-select" 
                                                    aria-label="Default select example" 
                                                    required={true}
                                                >
                                                    <option value="none" selected disabled hidden ></option>
                                                    <option >collector</option>
                                                    <option >gallery</option>
                                                    <option >home_auction</option>
                                           
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
                                                        <Option onChange={(e)=>console.log(e.target.value)}  value={`${activity?.id}`}>{activity?.title}</Option>
                                                    </React.Fragment>
                                                )) : <Option value="s"></Option>}

                                                    
                                            
                                            </Select>

                                            </div>
                                        </div>


                                        <div class="col-md-6">
                                            <div class="input-group">
                                                <label class="default-lable">تعداد خانه حراجی</label>
                                                <input  
                                                    onChange={(e)=>handleSetCount(e.target.value)} 
                                                    type="number" 
                                                    maxlength ={5}
                                                    class="default-input"
                                                    placeholder="" 
                                                    // value="+98 912 506 3365"
                                                     />
                                            </div>
                                        </div>

                                    </div>


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