import React from 'react';
import {BeatLoader} from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block !important;
  position : absolute ;
  top : 40% ;
  right : 49% ;
  z-index : 99999999999;
`;

function Spinners({loading}) {
    return (
        <React.Fragment>
            <BeatLoader
 color={"#009688"} loading={loading}  css={override}  size={20} />
        </React.Fragment>
    )
}

export default Spinners;
