import React, { Fragment, useState, useEffect } from "react";
import { ReactComponent as ArrowIcon } from "./../assets/arrow-left.svg";
import PropTypes from "prop-types";

const Top = ({ setShowPage }) => {
  return (
    <div className="relative ">
      <div className="w-full h-[84px] bg-light-sky rounded-t-md">
        <div className="flex items-center w-full h-full">
          <div
            onClick={() => {
              setShowPage(0);
            }}
            className="ml-[32px] mr-[24px] p-[5px] w-6 h-6 rounded-full cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M5.58252 3.45917L2.04169 7L5.58252 10.5408"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9584 7H2.14087"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white text-[24px] font-bold">Restaurnat ABC</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
