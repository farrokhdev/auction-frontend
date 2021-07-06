import React, { useState } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import BasicInformation from './BasicInformation';
import AuctionDate from "./AuctionDate";
import OfferRange from "./OfferRange";
import Currency from "./Currency";
import BuyerValidation from "./BuyerValidation";
import Conditions from "./Conditions";
const listComponent = [
    { name: "اطلاعات پایه", value: 1 },
    { name: "تاریخ حراج", value: 2 },
    { name: "بازه پیشنهادات", value: 3 },
    { name: "واحد پول", value: 4 },
    { name: "اعتبارسنجی خریداران", value: 5 },
    { name: "شرایط", value: 6 },

]

function UserPanelCreateAuctionsTimedaction() {
    const [selectComponent, setSelectComponent] = useState(1);

    return (
        <div>

            <HeaderPanel />
            <div class="panel-main">
                <PanelSidebar />
                <div class="panel-body">
                    <div class="panel-container newauction">
                        <div class="wizard leftalign">
                            <ul className="wizard-list">
                                {
                                    listComponent.map((item, i) => <li key={i} className={selectComponent === item?.value && "current"}>
                                        <span className="d-none d-md-inline-block"> {item?.name}</span>
                                        <span className="wizard-mobile d-md-none">{item?.value}</span>
                                    </li>)
                                }
                            </ul>
                        </div>
                        {selectComponent === 1 && <BasicInformation setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                        {selectComponent === 2 && <AuctionDate setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                        {selectComponent === 3 && <OfferRange setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                        {selectComponent === 4 && <Currency setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                        {selectComponent === 5 && <BuyerValidation setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                        {selectComponent === 6 && <Conditions setSelectComponent={setSelectComponent} selectComponent={selectComponent} />}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserPanelCreateAuctionsTimedaction;