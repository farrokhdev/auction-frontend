import React , {useState , useEffect} from "react";
import axios from "../../utils/request";
import {BASE_URL} from "../../utils";
import CardHouseAuction from "./CardHouseAuction";
import CardAuction from "./CardAuction";
import CardProduct from "./CardProduct";

function AllTab({items , search , timeExpire}) {

const [allResultSearch, setAllResultSearch] = useState([])


  useEffect(() => {
    setAllResultSearch( allResultSearch.concat(items?.products).concat(items?.home_auctions).concat(items?.auctions))
  }, [items])


  const Follow = (data, action) => {
    if (action) {
        axios.delete(`${BASE_URL}/following/${data}`)
            .then(resp => {
              search()
            })
    } else {
        axios.post(`${BASE_URL}/following/`, {
            "content_type": "auction",
            "object_id": data,
            "activity_type": "follow"
        })
            .then(resp => {
                if (resp.data.code === 201) {
                  search()
                }

            })
            .catch(err => {
                console.error(err);
            })

    }
}




  return (
    <div className="tab-content main-tab-content " id="cat-serach-content">
      <div
        className="tab-pane fade show active"
        id="catsearch1"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="owl-carousel">

        <div className="row row-cols-xxxxl-3 row-cols-xl-2 row-cols-1">    

                {items?.home_auctions?.length ? items?.home_auctions?.map((house , key) => (
                    <React.Fragment key={key}>
                        <CardHouseAuction house={house}/>
                      </React.Fragment>
                )) : ''}

            </div>


            <div class="col-xxxxl-8 ">
                {items?.auctions?.length ? items?.auctions?.map((item , key) => (
                        <React.Fragment key={key}>
                              <CardAuction item={item} timeExpire={timeExpire}/>
                        </React.Fragment>
                    )) : ''}
            </div>


            <div className="row row-cols-xxxxl-6 row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2">
                {  items?.products?.length ? items?.products?.map((item , key) => (
                        <React.Fragment key={key}>
                            <CardProduct item={item}/>
                        </React.Fragment>
                    )) : ''}
            </div>

        </div>
      </div>
    </div>
  );
}

export default AllTab;
