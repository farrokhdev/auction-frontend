import React, { useState, useEffect } from 'react'
import HeaderPanel from '../../components/HeaderPanel';
import PanelSidebar from '../../components/PanelSidebar';
import axios from "../../utils/request";
import { BASE_URL } from "../../utils";

function UserPanelMyAuctions() {
    const [Products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    console.log("Products===>>", Products)


    const getProducts = () => {
        setLoading(true)
        axios.get(`${BASE_URL}/panel/contents/`)
            .then(resp => {
                setLoading(false)
                if (resp.data.code === 200) {
                    setProducts(resp.data.data.result)
                }

            })
            .catch(err => {
                setLoading(false)
                console.error(err);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    // const displayList = [
    //     {
    //         item: 1,
    //         text: "<strong>ABC</strong> this should be strong."
    //     },
    //     {
    //         item: 2,
    //         text: "<a>ABC</a> this should be link."
    //     },
    //     {
    //         item: 3,
    //         text: "normal text"
    //     }
    // ];

    return (
        <>
            <HeaderPanel titlePage={''} />
            <div className="panel-main">
                <PanelSidebar />
                <div className="panel-body">
                    <div className="panel-container">

                        <ul>
                            {Products?.length && Products?.map((item, i) => (
                                <div className="mrgt30">
                                    <div className="table-responsive">
                                        <table className="panel-table sellrecommand ">
                                            <thead>
                                                <tr>
                                                    <td>
                                                        <h4>

                                                        {item?.title}
                                                        </h4>
                                                        </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <div dangerouslySetInnerHTML={{
                                                    __html: item?.body
                                                }}>
                                                </div>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPanelMyAuctions;