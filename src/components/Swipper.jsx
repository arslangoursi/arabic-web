import Img1 from "../assets/image 3.png";
import Img2 from "../assets/image 4.png";
import Img3 from "../assets/image 5.png";
import Img4 from "../assets/image 6.png";
import Img5 from "../assets/image 7.png";
import Img6 from "../assets/image 8.png";
import Img7 from "../assets/image 9.png";
import Img8 from "../assets/image 10.png";

import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";

register();

export default function Swipper() {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState();
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  function changeSlidesPerView() {
    if (window.innerWidth < 768) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(5);
    } else if (window.innerWidth < 1300) {
      setSlidesPerView(6);
    } else {
      setSlidesPerView(7);
    }
  }
  return (
    <>
      <div className="logos__container">
        <div className="logos__container__list">
          <swiper-container
            ref={swiperElRef}
            spaceBetween={50}
            slides-per-view={slidesPerView}
            loop
            Autoplay
            className="swipper__container"
          >
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img1} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img2} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img3} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img4} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img5} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img6} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img7} alt="" />
              </div>
            </swiper-slide>
            <swiper-slide className="swipper__slider">
              <div className="logos__container__list__img">
                <img src={Img8} alt="" />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </>
  );
}
