import React from 'react';
import CREATIVE_BG from '../../../assets/images/creative-bg-01.jpg';
import CREATIVE_AVATAR from '../../../assets/images/creative-01.jpg';

const MyPagePresenter = () => {
  /* Router */
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <section className="mt-24 h100vh">
      <div>
        <div
          class="text-center shadow-sm"
          data-aos-anchor="[data-aos-id-cards]"
          data-aos="fade-down"
        >
          <img
            class="w-full h-50 object-cover opacity-60"
            src={CREATIVE_BG}
            width="258"
            height="64"
            alt="Creative 01 bg"
          />
          <div class="bg-white px-4 pb-6">
            <div class="relative inline-flex -mt-8 mb-3">
              <img
                class="inline-flex rounded-full"
                src={CREATIVE_AVATAR}
                width="128"
                height="128"
                alt="Creative 01"
              />
            </div>
            <div class="mb-5">
              <div class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
                OngDV
              </div>
              <div class="text-sm font-medium text-gray-500">
                @ongdv.testnet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPagePresenter;
