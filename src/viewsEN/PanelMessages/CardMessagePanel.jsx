import React from 'react'

function CardMessagePanel(props) {

    const {setVisibleModalMoreDetailsMessage} = props

    return (
        <div class="col">
            <div class="msg-block unread " data-bs-toggle="modal"
                data-bs-target="#readmsg">
                <h5 class="default">Up to 30% offer</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                <button onClick={()=> setVisibleModalMoreDetailsMessage(true)} type="button" class="btn btn-view">More</button>
            </div>
        </div>
    )
}

export default CardMessagePanel;
