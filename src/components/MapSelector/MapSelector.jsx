import React , {useState , useEffect} from 'react'
import  { Map, TileLayer, Marker, Popup  }  from 'react-leaflet';
import L from "leaflet";
import '../../assets/style/leaflet.scss';

function SelectorMap({location , setPoint}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMap, setisOpenMap] = useState(false);
    const [zoom, setZoom] = useState(13);
    const [position, setPosition] = useState(["35.790655" , "51.420518"]);


    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(location) {

        });
    }, []);

    return (
         <React.Fragment>
            <div className="contentMap">

                <Map
                    // ref={r=>this.map=r}
                    center={ location ? location : ["35.790655" , "51.420518"] }
                    zoom={zoom}
                    onzoomend={e=>setZoom(e.target._zoom)}
                    style={{width:"100%",height:"200px"}}
     
                    onclick={e => {
                        setPoint({latitude: e.latlng.lat, longitude: e.latlng.lng})
                    }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution="<a href=http://biithome.com>biithome.com</a>"
                    />
                    <Marker
                        position={location ? location : ["35.790655" , "51.420518"] }
                    >
                        <Popup>موقعیت خانه حراجی</Popup>
                    </Marker>

                  
                </Map>
                
            </div>
        </React.Fragment>
    )
}

export default SelectorMap;




