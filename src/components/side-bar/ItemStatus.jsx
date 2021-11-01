import React from 'react'
import { status } from '../../utils/converTypePersion';

function ItemStatus({ id, title, handleAuctionStatus, Tags, setTags, params }) {

    const status = (value) => {

        switch (value) {

            case "آینده":
                return "PREPARING"
            case "فعلی":
                return "ACTIVE"
            case "گذشته":
                return "CLOSED"
        }
    }

    // console.log("title===>>>", title)


    return (

        <div className="form-check">
            <input
                onClick={(e) => {
                    if (params.auctions__status) {
                        if (e.currentTarget.checked) {
                            handleAuctionStatus([...params.auctions__status, status(title)])
                            setTags([...Tags, title])
                        } else {
                            handleAuctionStatus(params.auctions__status.filter(item => item !== status(title)))
                            setTags(Tags.filter((item) => item !== title))
                        }
                    }
                    else {
                        if (e.currentTarget.checked) {
                            handleAuctionStatus([...params.status, status(title)])
                            setTags([...Tags, title])
                        } else {
                            handleAuctionStatus(params.status.filter(item => item !== status(title)))
                            setTags(Tags.filter((item) => item !== title))
                        }
                    }

                }

                }


                className="form-check-input" type="checkbox" value="" id={id} checked={Tags.indexOf(title) > -1 ? true : false} />
            <label className="form-check-label" for={id}>
                {title}
            </label>
        </div>

    )
}

export default ItemStatus;