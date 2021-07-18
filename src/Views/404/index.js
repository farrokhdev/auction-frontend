import React from 'react';
import { Result, Button } from 'antd';
import {Link} from "react-router-dom";
const Index = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <Result
            status="404"
            title="404"
            subTitle="متاسفم ، این صفحه وجود ندارد"
            extra={<span><Link to="/" className="bid-style">بازگشت به خانه</Link></span>}
        />
        </div>
    );
};

export default Index;