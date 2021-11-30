import React , {useState , useEffect} from 'react';
import CardMessagePanel from './CardMessagePanel';
import ModalMoreDetailMessage from './ModalMoreDetailMessage';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import PaginationComponent from '../../componentsEN/PaginationComponent';
import queryString from "query-string";

function NotificationTab() {

    const [visibleModalMoreDetailsMessage, setVisibleModalMoreDetailsMessage] = useState(false);
    const [countMessages, setCountMessages] = useState(0);
    const [Messages, setMessages] = useState("");
    const [MESSAGE_ID, setMESSAGE_ID] = useState(null);
    const [params, setParams] = useState({
        page : 1 , 
        page_size : 10
    })

    useEffect(() => {
        getMessages()
    }, [params])

    const getMessages = () => {
        const queries = queryString.stringify(params);
        axios.get(`${BASE_URL}/messaging/inbox/?${queries}`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setMessages(resp.data.data.result)
                    setCountMessages(resp.data.data.count)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }

    const handeSelectPage = (e) => {
        setParams({
          ...params,
          page: e,
        });
      };


    return (
        <>
            <div class="row row-cols-lg-2 row-cols-1">

                {Messages?.length ? Messages?.map((message , key) => (
                    
                    <React.Fragment key={key}>

                        <CardMessagePanel
                            setVisibleModalMoreDetailsMessage={setVisibleModalMoreDetailsMessage}
                            message={message}
                            setMESSAGE_ID={setMESSAGE_ID}
                        />
                    </React.Fragment>
                )) : ''}

                        <ModalMoreDetailMessage
                            setVisibleModalMoreDetailsMessage={setVisibleModalMoreDetailsMessage}
                            visibleModalMoreDetailsMessage={visibleModalMoreDetailsMessage}
                            MESSAGE_ID={MESSAGE_ID}
                            
                            />
            </div>   

            <PaginationComponent
                count={countMessages}
                handeSelectPage={handeSelectPage}
            />                               
        </>
    )
}

export default NotificationTab;
