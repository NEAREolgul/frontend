import { useState } from 'react';
import Author01 from '../assets/images/author-01.jpg';
import InspirationCategory from './Swiper/InspirationCategory';
import InspirationImg from './Swiper/InspirationImg';
import { BiSearchAlt } from 'react-icons/bi';
import PostAuthor01 from '../assets/images/blog-author-01.jpg';
import PostAuthor02 from '../assets/images/blog-author-02.jpg';
import PostAuthor03 from '../assets/images/blog-author-03.jpg';
import PostAuthor04 from '../assets/images/blog-author-04.jpg';
import PostAuthor05 from '../assets/images/blog-author-05.jpg';

const Inspiration = (props) => {
  const avatars = [
    PostAuthor01,
    PostAuthor02,
    PostAuthor03,
    PostAuthor04,
    PostAuthor05,
  ];
  const names = ['BoGeum', 'YoHan', 'Simon', 'HanHo', 'KyeongWoo'];
  const emails = [
    'bogeum@islab.re.kr',
    'yohan@islab.re.kr',
    'simon@islab.re.kr',
    'hanho@islab.re.kr',
    'kyeongwoo@islab.re.kr',
  ];
  const arrays = [
    ['0', '1', '3'],
    ['0', '2', '3'],
    ['0', '1', '4'],
    ['0', '2', '3', '4'],
    ['0', '2'],
    ['0', '3'],
    ['0', '1', '2'],
    ['0', '3', '4'],
    ['0', '4'],
  ];

  const { List = false, tokenImg } = props;
  const [category, setCategory] = useState('0');
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <svg
                className="fill-gray-300  hidden md:block absolute -ml-7 -mt-8"
                width="22"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                  fillRule="evenodd"
                />
              </svg>
              {List ? (
                <h2 className="h2 font-cabinet-grotesk">Latest Art NFT</h2>
              ) : (
                <a href="/nftlist">
                  <h2 className="h2 font-cabinet-grotesk">Latest Art NFT</h2>
                </a>
              )}
            </div>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8">
              {List && (
                <div className="searchbox mb2 bg-white relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5">
                  <BiSearchAlt size="2rem" style={{ margin: 'auto' }} />
                  <input type="text" className="searchbox-input" />
                </div>
              )}
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <InspirationCategory
                  CategoryTitle="All"
                  Checkcategory="0"
                  category={category}
                  setCategory={setCategory}
                  CategoryQty="9"
                />

                <InspirationCategory
                  CategoryTitle="Illustration"
                  Checkcategory="1"
                  category={category}
                  setCategory={setCategory}
                  CategoryQty="4"
                />

                <InspirationCategory
                  CategoryTitle="Branding"
                  Checkcategory="2"
                  category={category}
                  setCategory={setCategory}
                  CategoryQty="5"
                />

                <InspirationCategory
                  CategoryTitle="Product Design"
                  Checkcategory="3"
                  category={category}
                  setCategory={setCategory}
                  CategoryQty="6"
                />

                <InspirationCategory
                  CategoryTitle="Typography"
                  Checkcategory="4"
                  category={category}
                  setCategory={setCategory}
                  CategoryQty="4"
                />
              </div>
            </div>
            {/* Gallery */}
            <div className="relative">
              {/* Images grid */}
              <div
                className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start"
                data-aos-id-inpspiration
              >
                {/* 1st Gallery img */}
                {tokenImg &&
                  tokenImg.map((i, idx) => {
                    const { metadata } = i;
                    console.log(metadata);
                    if (idx === 0) {
                      return (
                        <InspirationImg
                          StyleArray={arrays[idx % 5]}
                          category={category}
                          imgSrc={metadata.media}
                          authSrc={avatars[0]}
                          wh={9}
                          AuthName={names[0]}
                          AuthLink={emails[0]}
                          LikeQty={Math.floor(Math.random() * 1000) + 'K'}
                          Contentprice={'90 NEAR'}
                        />
                      );
                    } else {
                      return (
                        <InspirationImg
                          StyleArray={arrays[idx % 5]}
                          category={category}
                          imgSrc={metadata.media}
                          authSrc={avatars[idx % 5]}
                          wh={9}
                          AuthName={names[idx % 5]}
                          AuthLink={emails[idx % 5]}
                          LikeQty={Math.floor(Math.random() * 1000) + 'K'}
                          Contentprice={
                            Math.floor(Math.random() * 100) + ' NEAR'
                          }
                        />
                      );
                    }
                  })}
              </div>
              {!List && (
                // CTA
                <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
                  <div className="flex h-full items-end justify-center">
                    <div className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm mb-6">
                      <a href="/nftlist">See More MasterPiece</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
