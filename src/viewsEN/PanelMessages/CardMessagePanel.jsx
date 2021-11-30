import React  from 'react';


function CardMessagePanel(props) {

    const {setVisibleModalMoreDetailsMessage , message , setMESSAGE_ID} = props;

    const handleShowDetailMessage = (e , id) => {
        e.preventDefault()
        setMESSAGE_ID(id)

        setTimeout(() => {
            setVisibleModalMoreDetailsMessage(true)
        }, 300);
    }

    return (
        <div class="col">
            <div className={"msg-block " + (message?.is_read ? "" : "unread")}  data-bs-toggle="modal"
                data-bs-target="#readmsg">
                <h5 className="default">{message?.message?.title}</h5>
                <p>{message?.message.body}</p>
                <button onClick={(e)=>handleShowDetailMessage(e , message?.id)} type="button" class="btn btn-view">More</button>
            </div>
        </div>
    )
}

export default CardMessagePanel;
