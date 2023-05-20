import React from 'react';
import '../../assets/css/InspirationImg.css';

function InspirationImg(props) {
  /* Router */

  /* State */
  const {
    StyleArray,
    delay = 0,
    category,
    imgSrc,
    authSrc,
    wh = 10,
    AuthName,
    AuthLink,
    LikeQty,
    Contentprice,
  } = props;

  let ChangeclassName = '';
  let width = 0;
  let height = 0;

  /* Hooks */

  /* Functions */
  if (wh === '10') {
    ChangeclassName = 'shrink-0 w-10 h-10 rounded-full mr-4';
    width = 10;
    height = 10;
  } else {
    ChangeclassName = 'shrink-0 w-9 h-9 rounded-full mr-4';
    width = 9;
    height = 9;
  }

  /* Render */
  return (
    <a
      className="relative group hover:shadow-xl transition duration-150 ease-in-out"
      style={!StyleArray.includes(category) ? { display: 'none' } : {}}
      href="/nftdetail"
      data-aos="fade-down"
      data-aos-anchor="[data-aos-id-inpspiration]"
    >
      <img
        className="w-full aspect-square object-cover"
        src={imgSrc}
        width="352"
        height="352"
        alt="img"
      />
      {/* Content on hover */}
      <div className="h100 md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none"
          aria-hidden="true"
        />
        {/* Content */}
        {/* Up Box */}
        <div className="likebox relative flex justify-between">
          {/* Like Box */}
          <div className="flex flex-nowrap items-center ml-2">
            <button className="text-rose-500 hover:text-rose-600">
              <span className="sr-only">Like</span>
              <svg
                className="fill-current"
                width="16"
                height="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z"
                  fillRule="nonzero"
                />
              </svg>
            </button>
            <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
              {LikeQty}
            </div>
          </div>
        </div>
        {/* Down Box */}
        <div className="relative flex justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <img
              className={ChangeclassName}
              src={authSrc}
              width={width}
              height={height}
              alt="img"
            />
            <div className="truncate">
              <div className="font-bold text-white truncate">{AuthName}</div>
              <div className="text-xs text-white opacity-60 truncate">
                {AuthLink}
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-nowrap items-center ml-2">
            <button className="text-rose-500 hover:text-rose-600"></button>
            <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">
              {Contentprice}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default InspirationImg;
