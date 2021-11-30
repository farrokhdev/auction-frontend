import React , {useState , useEffect} from 'react';
import {Modal} from 'antd'
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";
import moment from 'jalali-moment'

function ModalMoreDetailMessage(props) {

    const {visibleModalMoreDetailsMessage , setVisibleModalMoreDetailsMessage , MESSAGE_ID} = props
    const [MessageDetail, setMessageDetail] = useState("");

    useEffect(() => {
        if(!!MESSAGE_ID){
            getMessage()
        }
    }, [MESSAGE_ID])

    const getMessage = () => {
        axios.get(`${BASE_URL}/messaging/inbox/${MESSAGE_ID}/`)
            .then(resp => {
                if (resp.data.code === 200) {
                    setMessageDetail(resp.data.data.result)
                }

            })
            .catch(err => {
                console.error(err);
            })
    }


    return (
        <React.Fragment>

            <Modal
                centered
                className="modal-more-details-message"
                visible={visibleModalMoreDetailsMessage}
                onOk={() => setVisibleModalMoreDetailsMessage(false)}
                onCancel={() => setVisibleModalMoreDetailsMessage(false)}
                width={600}
                footer={[]}
                header={[]}
                >
                <div class="modal-content border-0">
                    <div class="modal-header">
                        <div class="container g-0 d-flex justify-content-between">
                            <div class="main-title">
                                <h2 class="default ">{MessageDetail?.message?.title}</h2>
                            </div>
                            <button onClick={() => setVisibleModalMoreDetailsMessage(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <span class="msg-date">{MessageDetail?.message?.creation_date ? moment(MessageDetail?.message?.creation_date, 'YYYY/MM/DD').locale('en').format('DD MMMM YYYY') : ''}</span>
                        <p>
                            {MessageDetail?.message?.body}
                        </p>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default ModalMoreDetailMessage;
