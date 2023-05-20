import NFTdetailImg from "../../../Components/NftdetailImg";
import Inspiration01 from "../../../assets/images/inspiration-01.jpg";
import "../../../assets/css/Nftdetail.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../../../Components/Carousel";
import Buylist from "../../../Components/Buylist";
import PostAuthor01 from "../../../assets/images/blog-author-01.jpg";
import PostAuthor02 from "../../../assets/images/blog-author-02.jpg";
import PostAuthor03 from "../../../assets/images/blog-author-03.jpg";
import PostAuthor04 from "../../../assets/images/blog-author-04.jpg";
import PostAuthor05 from "../../../assets/images/blog-author-05.jpg";

const NFTdetailPresenter = (props) => {
  /* Router */
  /* State */
  const { buyList, setBuyList, bidList, setBidList } = props;
  const [reversebuyList, setReversebuyList] = useState(buyList);
  const [reversebidList, setReversebidList] = useState(bidList);
  const [nftInfo, setNftInfo] = useState({
    content_title: "SS Face",
    user_nm: "Bogeum",
    content_desc:
      "Its a NFT of a face reminiscent of a beautiful solar system in an empty universe that makes us realize that we are beautiful",
    content_price: "$ 90",
    is_sell: true,
    content_paint: "What is this?",
    created_at: "2020-12-20",
  });
  /* Hooks */
  useEffect(() => {
    setReversebuyList([...buyList].reverse());
  }, [buyList]);

  useEffect(() => {
    setReversebidList([...bidList].reverse());
  }, [bidList]);
  /* Functions */
  /* Render */
  return (
    <section className="mt5 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt5 py-12 md:pt-32 md:pb-20">
          <div className="relative flex flexrow">
            <div
              className="w50 m0 flex max-w-sm mx-auto sm:max-w-none gird gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
              data-aos-id-inpspiration
            >
              <NFTdetailImg imgSrc={Inspiration01} className="h60" />
            </div>
            <div className="w50 fontcolor m0 pt5p pl10">
              <h3 className="fontwhite detailTitle">{nftInfo.content_title}</h3>
              <p className="detaildesc detailfont">{nftInfo.content_desc}</p>
              <div className="detailfont ownerbox">
                <p className="detailfont ownerbox-p">Owned by</p>
                <p className="detailfont ownerbox-info ownerbox-info-name">
                  {nftInfo.user_nm}
                </p>
                {/* 사용자 정보 */}
              </div>
              <div className="pricebox">
                <p className="pricebox-p">Price</p>
                <p className="pricebox-price">{nftInfo.content_price}</p>
              </div>
              <div className="actionbuttonbox">
                {nftInfo.is_sell ? (
                  <Link
                    className="actionbutton btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    to={{ pathname: "/buynft" }}
                  >
                    Buy
                  </Link>
                ) : (
                  <Link className="actionbutton notworkingbutton btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm">
                    Buy
                  </Link>
                )}
                <Link
                  className="actionbutton btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                  to={{ pathname: "/bidnft" }}
                >
                  Bid
                </Link>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="fw status">
              <div className="status-header">
                <p>History</p>
              </div>
              <div>
                {reversebuyList.map((item, index) => {
                  return (
                    <Buylist
                      key={index}
                      price={item.price}
                      user_nm={item.user_nm}
                      authSrc={item.authSrc}
                    />
                  );
                })}
              </div>
            </div>

            <div className="fw status">
              <div className="status-header">
                <p>Bid Status</p>
              </div>
              <div>
                {reversebidList.map((item, index) => {
                  return (
                    <Buylist
                      key={index}
                      price={item.price}
                      user_nm={item.user_nm}
                      authSrc={item.authSrc}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTdetailPresenter;
