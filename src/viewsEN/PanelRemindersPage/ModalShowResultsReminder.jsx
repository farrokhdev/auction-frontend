import React , {useState} from 'react'
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
            getResultProducts(id);
        }, 500);
    }

    const getResultProducts = (id) => {
        axios.get(`${BASE_URL}${LIST_PRODUCTS_MATCHED(id)}`).then(res => {
            setResultProducts(res.data.data.result);
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <React.Fragment>

            <button onClick={(e)=>handleShowResultsModal(reminder?.id)} type="button" className="btn-outline-gray">Result</button>

            <Modal
                title="products List"
                centered
                className="modal-list-product-result"
                visible={visibleShowResults}
                onOk={() => setVisibleShowResults(false)}
                onCancel={() => setVisibleShowResults(false)}
                width={1000}
                footer={[]}
                >

                <div class="modal-content border-0">
                    <div class="modal-header">
                        <div class="container g-0 d-flex justify-content-between">
                            <button onClick={() => setVisibleShowResults(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body textalign-center">
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
                                                    {`${product?.max_price} USD`}
                                                </div>   
                                            </td>
                                    
                                    </tr>
                                </React.Fragment>
                            )) : ''}

                        </tbody>

                    </table>
                </div>
                    </div>
                    <div class="modal-footer">
                        <button onClick={() => setVisibleShowResults(false)} type="button" class="btn btn-default">Close</button>
                    </div>
                </div>

    
            </Modal>
        </React.Fragment>
    )
}

export default ModalEditReminder;
