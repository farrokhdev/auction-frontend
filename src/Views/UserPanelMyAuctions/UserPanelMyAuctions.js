import React, { useState, useEffect } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';

function UserPanelMyAuctions() {


    return (
        <>
            <HeaderPanel titlePage={'حراج‌های من'} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelMyAuctions;