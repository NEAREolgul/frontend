import React from 'react';

function InspirationPost(props) {
  /* Router */
  /* State */
  const { CategoryTitle, Checkcategory, category, setCategory, Categoryqty } =
    props;
  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <button
      className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${
        category === Checkcategory
          ? 'bg-blue-100 border-blue-300'
          : 'bg-white border-gray-200'
      }`}
      onClick={() => setCategory({ Checkcategory })}
    >
      <div className="flex items-center justify-center">
        <span>{CategoryTitle}</span>
        <span
          className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${
            category === Checkcategory
              ? 'text-white bg-blue-300'
              : 'text-gray-400 bg-gray-100'
          }`}
        >
          {Categoryqty}
        </span>
      </div>
    </button>
  );
}

export default InspirationPost;
