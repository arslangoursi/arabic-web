import Img1 from "../assets/image 3.png";
import Img2 from "../assets/image 4.png";
import Img3 from "../assets/image 5.png";
import Img4 from "../assets/image 6.png";
import Img5 from "../assets/image 7.png";
import Img6 from "../assets/image 8.png";
import Img7 from "../assets/image 9.png";
import Img8 from "../assets/image 10.png";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";

register();

export default function Swipper() {
  const swiperElRef = useRef(null);

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
  return (
    <>
      <div className="logos__container">
        <div className="logos__container__list">
          <swiper-container
            ref={swiperElRef}
            slides-per-view="6"
            navigation="false"
            pagination="false"
          >
            <swiper-slide>
              <img src={Img1} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img2} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img3} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img4} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img5} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img6} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img7} alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src={Img8} alt="" />
            </swiper-slide>
            ...
          </swiper-container>
        </div>
      </div>
    </>
  );
}
