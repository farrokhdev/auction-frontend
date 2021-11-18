import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Favourite from './Favourite'
import Wallet from './wallet';
import Recommender from './Recommender'
import Contract from './Contract';


const listComponent=[
  {name:"Favorite artworks",value:1},
  {name:"Wallet",value:2},
  {name:"Referrer",value:3},
  {name:"Agreement",value:4},
]
function Content(props) {

  const [selectComponent, setSelectComponent] = useState(1);
  const [selectProducts, setSelectProducts] = useState("");
  const [RecommenderData, setRecommender] = useState("");


  return (
    <>
      <main className="innercontent" id="buyer-registration">
        <div className="container innercontainer">
          <div className="row sm-mrgb50">
            <div className="col-12">
              <div className="main-title d-inline-flex">
                <h2 className="default titr">BUYER REGISTRATION</h2>
                <ul className="breadcrumb-cs">
                  <li>
                    <Link to="/">Homepage</Link>
                  </li>
                  <li className="active">Buyer registration</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="wizard">
              <ul className="wizard-list">
                {
                  listComponent.map((item,i)=><li key={i} className={selectComponent===item?.value && "current"}>
                    <span className="d-none d-md-inline-block"> {item?.name}</span>
                    <span className="wizard-mobile d-md-none">{item.value}</span>
                  </li>)
                }
              </ul>
            </div>
          </div>
          {selectComponent===1 && <Favourite
              setSelectComponent={setSelectComponent}
              selectComponent={selectComponent}
              setSelectProducts={setSelectProducts}
              id={props.id}/>}
          {selectComponent===2 && <Wallet
              setSelectComponent={setSelectComponent}
              selectComponent={selectComponent}
              selectProducts={selectProducts}
          />}
           {selectComponent===3 && <Recommender
              setSelectComponent={setSelectComponent}
              selectComponent={selectComponent}
              setRecommender={setRecommender}
          />}
          {selectComponent===4 && <Contract
              setSelectComponent={setSelectComponent}
              selectComponent={selectComponent}
              selectProducts={selectProducts}
              RecommenderData={RecommenderData}
              // id={props.id}
          />} 
        </div>
      </main>
    </>
  );
}


export default Content;

