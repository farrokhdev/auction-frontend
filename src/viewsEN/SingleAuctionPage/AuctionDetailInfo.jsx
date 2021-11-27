import React from 'react';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";

function AuctionDetailInfo({HouseDetail , getAuction , auction}) {

    console.log("getAuction : " , auction);

    const parser = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                return data[i].exact_url
            }
    }

    const parseWebSite = (data, type) => {
        for (let i in data)
            if (data[i].type === type) {
                if (data[i].url.startsWith("http"))
                    return data[i].url
                else
                    return "http://" + data[i].url
            }
    }

    const Follow = (data, action) => {
        if (action) {
            axios.delete(`${BASE_URL}/following/${data}`)
                .then(resp => {
                    getAuction()
                })
        } else {
            axios.post(`${BASE_URL}/following/`, {
                "content_type": "auction",
                "object_id": data,
                "activity_type": "follow"
            })
                .then(resp => {
                    if (resp.data.code === 201) {
                        getAuction()
                    }

                })
                .catch(err => {
                    console.error(err);
                })

        }
    }

    return (
        <div className="row">
        <div className="col-lg-8">
            <p>It is always a special moment when works from artists’ personal collections appear on the market,
                but never more so than when those artists are among the world’s most celebrated names.</p>
            <p>Sotheby’s is honoured to announce the sale of works from the long-time New York studio and home
                of internationally renowned artists Christo and Jeanne-Claude. The captivating collection
                invites the world to step into the private sphere of the famed artistic couple, through nearly
                400 lots that showcase the range of their artistic inspirations, friendships with leading 20th
                century artists, and the famed studio where Christo and Jeanne-Claude projected their artistic
                vision to the world.</p>
            <p>Additionally, the collection includes several works by Christo and Jeanne-Claude spanning their
                multi-decade practice, featuring many of their most well-known public projects, such as The Pont
                Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for Japan and USA, as well as
                their famed Package and Store Front series from the 1960s.</p>
            <div className="vartical-tab">
                <ul className="nav nav-tabs " id="vt-1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="vtab1" data-bs-toggle="tab" data-bs-target="#v1"
                                type="button" role="tab" aria-controls="v1" aria-selected="true">Payment
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vtab2" data-bs-toggle="tab" data-bs-target="#v2"
                                type="button"
                                role="tab" aria-controls="v2" aria-selected="false">Shipping
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vtab3" data-bs-toggle="tab" data-bs-target="#v3"
                                type="button"
                                role="tab" aria-controls="v3" aria-selected="false">Terms of use
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vtab4" data-bs-toggle="tab" data-bs-target="#v4"
                                type="button"
                                role="tab" aria-controls="v4" aria-selected="false">Other
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="vt-1Content">
                    <div className="tab-pane fade show active" id="v1" role="tabpanel" aria-labelledby="vtab1">
                        <p>
                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                            (par
                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                            qu’elle
                            a
                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                            sera
                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                            parties
                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                            pourront
                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                        <h5 className="default">Payment terms</h5>
                        <p>
                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                            spanning
                            their multi-decade practice, featuring many of their most well-known public
                            projects,
                            such
                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                            Japan
                            and
                            USA, as well as their famed Package and Store Front series from the 1960s.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="v2" role="tabpanel" aria-labelledby="vtab2">
                        <p>
                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                            (par
                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                            qu’elle
                            a
                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                            sera
                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                            parties
                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                            pourront
                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                        <h5 className="default">Shipping</h5>
                        <p>
                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                            spanning
                            their multi-decade practice, featuring many of their most well-known public
                            projects,
                            such
                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                            Japan
                            and
                            USA, as well as their famed Package and Store Front series from the 1960s.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="v3" role="tabpanel" aria-labelledby="vtab3">
                        <p>
                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                            (par
                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                            qu’elle
                            a
                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                            sera
                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                            parties
                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                            pourront
                            parfois avoir connaissance du Prix de Réserve du Lot.</p>
                        <h5 className="default">Terms of use</h5>
                        <p>
                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                            spanning
                            their multi-decade practice, featuring many of their most well-known public
                            projects,
                            such
                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                            Japan
                            and
                            USA, as well as their famed Package and Store Front series from the 1960s.
                        </p>
                    </div>
                    <div className="tab-pane fade" id="v4" role="tabpanel" aria-labelledby="vtab3">
                        <p>
                            Lorsqu’une personne qui a un intérêt, direct ou indirect, dans la vente d’un Lot
                            (par
                            exemple, parce qu’elle est membre d’une indivision propriétaire du Lot ou parce
                            qu’elle
                            a
                            donné une garantie pour ce Lot), est autorisée à enchérir pour ledit Lot, il vous
                            sera
                            indiqué, par un courriel et/ou dans les Informations sur la Vente en Ligne, que des
                            parties
                            intéres sées sont susceptibles d’enchérir sur ce Lot. Ces parties intéressées
                            pourront
                            parfois avoir connaissance du Prix de Réserve du Lot.
                        </p>
                        <h5 className="default">Other</h5>
                        <p>
                            Additionally, the collection includes several works by Christo and Jeanne-Claude
                            spanning
                            their multi-decade practice, featuring many of their most well-known public
                            projects,
                            such
                            as The Pont Neuf Wrapped, Project for Paris, and The Umbrellas, Joint Project for
                            Japan
                            and
                            USA, as well as their famed Package and Store Front series from the 1960s.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
        <div className="auction-gallery-info">
            <div className="ah-left">
                <div className="h-block-img">
                    <img src={parser(HouseDetail?.media, 'profile')} width="159"
                        height="159"
                        alt={HouseDetail?.home_auction_name} />
                </div>
                <div className="detail-ahm">
                    <a href="#" className="ah-link"><h3
                        className="default">{HouseDetail?.home_auction_name}</h3></a>
                    {/* <button type="button" className="btn-follow">دنبال کردن</button> */}
                    <button
                        onClick={() =>
                            Follow(
                                auction?.house?.following?.follow?.is_active ?
                                auction?.house?.following?.follow?.id :
                                auction?.id, auction?.house?.following?.follow?.is_active)
                            }
                        type="button" className={" reminder-icon " + (auction?.house?.following?.follow?.is_active ? "active" : "")}>
                        {auction?.house?.following?.follow?.is_active ? "Reminding" : "Reminde me"}
                    </button>
                </div>
            </div>
            <div className="ah-block-all-info">
                <a href={parseWebSite(HouseDetail?.info_link, 'website')}
                     className="link-info all-info">{parseWebSite(HouseDetail?.info_link, 'website')}</a>
                <a href={`mailto: ${HouseDetail?.email}`}
                     className="all-info mail-info">{HouseDetail.email}</a>
                <a href={HouseDetail?.phone ? HouseDetail?.phone : HouseDetail?.mobile}
                    className="info-tel all-info">{HouseDetail?.phone ? HouseDetail?.phone : HouseDetail?.mobile}</a>
                <address className="all-info">
                    {HouseDetail?.home_auction_location?.address_en}
                </address>
            </div>
            <ul className="social">
                <li>
                    <a href={parseWebSite(HouseDetail?.info_link, 'facebook')}
                        id="facebook" />
                </li>
                <li>
                    <a href={parseWebSite(HouseDetail?.info_link, 'instagram')}
                        id="instagram" />
                </li>
                <li>
                    <a href={parseWebSite(HouseDetail?.info_link, 'telegram')}
                        id="telegram" />
                </li>
            </ul>
        </div>


            {/* <div className="auction-gallery-info bg-warning">
                <div className="ah-left">
                    <div className="h-block-img">
                        <img src="img/logo-3.png" width="159" height="159"
                             alt="arthibition gallery"/>
                    </div>
                    <div className="detail-ahm">
                        <a href="#" className="ah-link"><h3 className="default">Arthibition gallery</h3></a>
                        <button type="button" className="btn-follow">Follow</button>
                    </div>
                </div>
                <div className="ah-block-all-info">
                    <a href="#" className="link-info all-info">www.sarebangallery.com</a>
                    <a href="mailto: Info@sarebangallery.com"
                       className="all-info mail-info">Info@sarebangallery.com</a>
                    <a href="+982144258856" className="info-tel all-info">+98 21 4425 8856</a>
                    <address className="all-info"><span className="province">Tehran Province,</span>Tehran,
                        Hoveyzeh St, No.130
                    </address>
                </div>
                <ul className="social">
                    <li><a href="#" id="facebook"></a></li>
                    <li><a href="#" id="instagram"></a></li>
                    <li><a href="#" id="telegram"></a></li>
                </ul>
            </div> */}
        </div>
    </div>
    )
}

export default AuctionDetailInfo;
