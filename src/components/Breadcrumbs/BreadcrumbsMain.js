import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbsMain(props) {
  const More = props.children;
  return (
    <>
      <div className="">
        <div className=" ">
          <div className="">
            <h2 className="">{props.title}</h2>
            <ul className="">
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              {props.parent && (
                <li>
                  <Link to={props.parent.link}>{props.parent.title}</Link>
                </li>
              )}
              <li className="active">{props.title}</li>
            </ul>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}

export default BreadcrumbsMain;
