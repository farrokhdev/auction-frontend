import React from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';

function UserPanelMyAuctions() {
    const displayList = [
        {
            item: 1,
            text: "<strong>ABC</strong> this should be strong."
        },
        {
            item: 2,
            text: "<a>ABC</a> this should be link."
        },
        {
            item: 3,
            text: "normal text"
        }
    ];
    return (
        <>
            <HeaderPanel titlePage={'حراج‌های من'} />
            <div className="panel-main">
            <PanelSidebar />
            <div className="panel-body">
            <div className="panel-container">
            
            <ul>
                {displayList.map((item, i) => (
                    <li key={i}>
                        <div dangerouslySetInnerHTML={{
                            __html: item.text
                        }}>
                        </div>
                    </li>
                ))}
            </ul>
            
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelMyAuctions;