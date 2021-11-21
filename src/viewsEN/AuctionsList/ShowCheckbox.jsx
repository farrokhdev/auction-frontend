import React, { useState, useEffect } from 'react';
import { Spin, message } from 'antd';


function ShowCheckbox({ auctionsListId, visible_in_site }) {
    const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsShow(visible_in_site)
    }, [visible_in_site])

    const handleShow = (value) => { }

    return (
        <>
            <Spin spinning={loading}>
                <input className="form-check-input" type="checkbox"
                    checked={isShow}
                    onChange={(e) => {
                        handleShow(e.target.checked);
                    }}
                    id="checkbox413" />
            </Spin>
        </>
    )
}

export default ShowCheckbox;
