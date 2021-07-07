import React from 'react'
import CardSales from './CardSales'


function Sales() {
    return (
        <>

            {/* <div class="tab-pane fade favorite-content"> */}

            <div className="col-xxxxl-8">
                {/* <div className="row-blocks"> */}
                    {[1, 2].map((item) => <CardSales />)}
                </div>
            {/* </div> */}


        </>
    )
}

export default Sales;