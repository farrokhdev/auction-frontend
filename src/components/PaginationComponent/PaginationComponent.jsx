import React from 'react'
import {Pagination} from 'antd';


function PaginationComponent({count , handeSelectPage}) {
    return (
        <React.Fragment>
            <div style={{direction : 'ltr'}} className="d-none d-sm-flex justify-content-center">
                <Pagination
                    responsive
                    showSizeChanger={false}
                    onChange={(e) => handeSelectPage(e)}
                    defaultCurrent={1}
                    total={count}
                    defaultPageSize={10}/>
            </div>
            <div style={{direction : 'ltr'}} className="d-flex d-sm-none justify-content-center ">
                <Pagination
                    onChange={(e) => handeSelectPage(e)}
                    defaultCurrent={1}
                    total={count}
                    defaultPageSize={10}
                    size="small"/>
            </div>
        </React.Fragment>
    )
}

export default PaginationComponent
