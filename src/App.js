import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Redirect

const RouterConfig = React.lazy(() => import('./services/RouterConfig'));
const RouterConfigEN = React.lazy(() => import('./services/RouterConfigEN'));

// import RouterConfig from "./services/RouterConfig";
// import RouterConfigEN from "./services/RouterConfigEN";

function App(props) {
    const { check_Language } = useSelector((state) => state.allReducer)

    return (

        <>
            {check_Language === 'en' ?
                <RouterConfigEN />
                :
                <RouterConfig />
            }

        </>
    );
}


export default App;

