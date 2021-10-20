import React from 'react'

function ItemStatus({ id, title, handleAuctionStatus, params }) {

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


    return (

        <div class="form-check">
            <input
                onClick={(e) => {

                        // if (e.currentTarget.checked) {
                        //     handleAuctionStatus([...params.auctions__status, status(title)])
                        // } else {
                        //     handleAuctionStatus(params.auctions__status.filter(item => item !== status(title)))
                        // }
                        if (params.auctions__status) {
                            if (e.currentTarget.checked) {
                                handleAuctionStatus([...params.auctions__status, status(title)])
                            } else {
                                handleAuctionStatus(params.auctions__status.filter(item => item !== status(title)))
                            }
                        }
                        else{
                            if (e.currentTarget.checked) {
                                handleAuctionStatus([...params.status, status(title)])
                            } else {
                                handleAuctionStatus(params.status.filter(item => item !== status(title)))
                            }
                        }

                }
            
            }


                class="form-check-input" type="checkbox" value="" id={id} />
            <label class="form-check-label" for={id}>
                {title}
            </label>
        </div>

    )
}

export default ItemStatus;