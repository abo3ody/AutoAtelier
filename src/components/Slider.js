import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { products } from "../utils/constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Slider() {
   const [slider, setSlider] = useState(products);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const lastIndex = slider.length - 1;
      if (index > lastIndex) setIndex(0);
      if (index < 0) setIndex(lastIndex);
   }, [index, slider]);

   useEffect(() => {
      let timer = setInterval(() => {
         setIndex(index + 1);
      }, 10000);
      return () => clearInterval(timer);
   }, [index]);
   return (
      <Wrapper>
         <FaChevronLeft
            className="arrow prev"
            onClick={() => setIndex(index - 1)}
         />
         <div className="slider_container">
            {slider.map((slide, slideIndex) => {
               const { id, title, text, url, image } = slide;
               let position = "nextSlide";
               if (slideIndex === index) {
                  position = "activeSlide";
               }
               if (
                  slideIndex === index - 1 ||
                  (index === 0 && slideIndex === slider.length - 1)
               ) {
                  position = "lastSlide";
               }
               return (
                  <article key={id} className={`slide ${position}`}>
                     <div className="img_container">
                        <img src={image} alt={title} />
                     </div>
                     <div className="slide_content">
                        <h1 className="hero_title">{title}</h1>
                        <p className="hero_info">{text}</p>
                        <Link to={url} className="btn hero_btn">
                           ПОСМОТРЕТЬ
                        </Link>
                     </div>
                  </article>
               );
            })}
         </div>
         <FaChevronRight
            className="arrow next"
            onClick={() => setIndex(index + 1)}
         />
      </Wrapper>
   );
}

export default Slider;

const Wrapper = styled.section`
   position: relative;
   .slider_container {
      height: 80vh;
      /* max-width: 600px; */
      position: relative;
      overflow: hidden;
   }
   .slide {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      position: absolute;
      opacity: 0;
      transition: all 0.5s linear;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 1);
      letter-spacing: 0.1rem;
   }

   .img_container {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      &::after {
         position: absolute;
         left: 0;
         top: 0;
         content: "";
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.8);
      }
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }
   .slide_content {
      position: absolute;
      left: 30%;
      transform: translateX(-30%);
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
   .hero_title {
      text-transform: capitalize;
      font-size: 4rem;
      letter-spacing: 0.2rem;
   }
   .hero_info {
      width: 40rem;
      font-size: 1.3rem;
      margin: 1rem 0;
   }
   .hero_btn {
      width: auto;
      margin-top: 1rem;
      display: block;
      font-weight: 600;
      border: 0.3rem solid #fff;
      color: #fff;
      &:hover {
         background-color: #fff;
         color: #141414;
      }
   }
   .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 3rem;
      cursor: pointer;
      z-index: 10;
      &:hover {
         transition: all 0.3s ease-in-out;
         color: #ffd700;
      }
   }
   .prev {
      left: 3rem;
   }
   .next {
      right: 3rem;
   }

   article.activeSlide {
      opacity: 1;
      transform: translateX(0);
   }
   article.lastSlide {
      transform: translateX(-100%);
   }
   article.nextSlide {
      transform: translateX(100%);
   }
   @media screen and (max-width: 768px) {
      .slider_container {
         height: 40vh;
      }
   }
   @media screen and (max-width: 576px) {
      /* .slider_container {
         height: 60vh;
      } */
      .slide_content {
         bottom: 50%;
         left: 50%;
         width: 90%;

         transform: translate(-50%, 50%);
         align-items: center;
      }
      .hero_info {
         /* display: none; */
         width: 100%;
         text-align: center;
         line-height: 1.6rem;
      }
      .hero_title {
         font-size: 2rem;
         margin-bottom: 0.7rem;
      }
      .arrow {
         position: absolute;
         top: 90%;
         transform: translateY(-50%);
         font-size: 3rem;
         cursor: pointer;
         z-index: 10;
      }
      .prev {
         left: 10rem;
      }
      .next {
         right: 10rem;
      }
   }
`;
