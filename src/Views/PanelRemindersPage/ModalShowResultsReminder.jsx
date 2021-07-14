import React , {useState , useEffect} from 'react'
import {Modal} from 'antd';
import {Link} from 'react-router-dom';
import axios from '../../utils/request';
import {BASE_URL} from '../../utils';
import {LIST_PRODUCTS_MATCHED} from '../../utils/constant';

function ModalEditReminder({reminder}) {

    const [resultProducts , setResultProducts] = useState([])
    const [visibleShowResults, setVisibleShowResults] = useState(false)
    

    const handleShowResultsModal = (id) => {

        setVisibleShowResults(true);
        setTimeout(() => {
            getResultProducts();
        }, 500);
    }

    const getResultProducts = () => {
        axios.get(`${BASE_URL}${LIST_PRODUCTS_MATCHED(reminder?.id)}`).then(res => {
            console.log(res.data.data.result);
            setResultProducts(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })
    }


    return (
        <React.Fragment>

            <button onClick={(e)=>handleShowResultsModal(reminder?.id)} type="button" className="btn-outline-gray">نتایج</button>

            <Modal
                title="لیست محصولات"
                centered
                className="modal-list-product-result "
                visible={visibleShowResults}
                onOk={() => setVisibleShowResults(false)}
                onCancel={() => setVisibleShowResults(false)}
                width={1000}>

                <div collapse className="table-responsive ">
                    <table className="panel-table reminder mrgt50">
                        <tbody>

                            {resultProducts?.length ? resultProducts?.map(product => (
                                <React.Fragment key={product?.id}> 
                                    <tr>
                                            <td style={{minWidth : '100px'}}>
                                                <Link to = {`/artworks/${product?.id}`}>
                                                    <div   className="d-flex  text-center">
                                                        <div className="col">
                                                            <img style={{width : '40px' , height : '40px'}}  src={product?.media?.exact_url} alt="image" />
                                                        </div>
                                                    </div>   
                                                </Link>
                                            </td>
                                            <td style={{minWidth : '100px'}}>
                                                <div className="d-flex text-center">
                                                    {product?.artwork_title}
                                                </div>   
                                            </td>
                                            <td style={{minWidth : '100px'}}>
                                                <div className="d-flex text-center">
                                                    {product?.persian_artist_name}
                                                </div>   
                                            </td >
                                            <td style={{minWidth : '100px'}}>
                                                <div className="d-flex text-center">
                                                    {`${product?.max_price} تومان`}
                                                </div>   
                                            </td>
                                    
                                    </tr>
                                </React.Fragment>
                            )) : ''}

                        </tbody>

                    </table>
                </div>
                    


            </Modal>
        </React.Fragment>
    )
}

export default ModalEditReminder;
