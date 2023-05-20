const Buylist = (props) => {
  /* Router */
  /* State */
  const { price, user_nm, authSrc } = props;

  /* Hooks */
  /* Functions */
  /* Render */
  return (
    <div className="buylist-font buylistbox">
      <div className="buylistbox-imgbox">
        <a href="#0">
          <img
            className="h32 rounded-full shrink-0 mr-3"
            src={authSrc}
            width={32}
            height={32}
            alt="img"
          />
        </a>
      </div>
      <div>
        <p>
          Bought for <strong>{price}</strong> Near
        </p>
        <p>By {user_nm} </p>
      </div>
    </div>
  );
};

export default Buylist;
