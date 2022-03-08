

import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("test scroll" , pathname);
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname]);

    return <Fragment>{children}</Fragment>;
}