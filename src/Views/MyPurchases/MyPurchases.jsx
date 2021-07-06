import React from "react";
import HeaderPanel from "../../components/HeaderPanel";
import PanelSidebar from "../../components/PanelSidebar";
import CardItem from "./CardItem";

function MyPurchases() {

    return (
        <>

            <HeaderPanel />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">
                        <div className="purchase-block">
                            <div className="row row-cols-1">
                                <CardItem
                                    Span="صادق ادهم"
                                    Head="از سری سقاخانه"
                                    Link="کالکشن 7"
                                    ArtworkLink=" گالری آرتیبیشن"
                                    ShowDate="12 شهریور 99"
                                    Price="3000" />

                                <CardItem
                                    Span="صادق ادهم"
                                    Head="از سری سقاخانه"
                                    Link="کالکشن 7"
                                    ArtworkLink=" گالری آرتیبیشن"
                                    ShowDate="12 شهریور 99"
                                    Price="3000" />

                                <CardItem
                                    Span="صادق ادهم"
                                    Head="از سری سقاخانه"
                                    Link="کالکشن 7"
                                    ArtworkLink=" گالری آرتیبیشن"
                                    ShowDate="12 شهریور 99"
                                    Price="3000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPurchases;