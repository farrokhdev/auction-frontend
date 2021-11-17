import React , {useState} from 'react'
import CardMessagePanel from './CardMessagePanel'
import ModalMoreDetailMessage from './ModalMoreDetailMessage'

function NotificationTab() {

    const [visibleModalMoreDetailsMessage, setVisibleModalMoreDetailsMessage] = useState(false)

    return (
        <div class="row row-cols-lg-2 row-cols-1">

            {[1, 2, 3, 4, 5].map((message , key) => (

                <React.Fragment key={key}>

                    <CardMessagePanel
                        setVisibleModalMoreDetailsMessage={setVisibleModalMoreDetailsMessage}
                    />
                </React.Fragment>
            ))}

                    <ModalMoreDetailMessage
                        setVisibleModalMoreDetailsMessage={setVisibleModalMoreDetailsMessage}
                        visibleModalMoreDetailsMessage={visibleModalMoreDetailsMessage}
                    />

        </div>                                  
    )
}

export default NotificationTab;
