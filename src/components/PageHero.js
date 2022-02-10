import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectProduct } from "../features/productSlice";

function PageHero() {
   const { product = [] } = useSelector(selectProduct);
   return (
      <Wrapper>
         <div>
            <h1 className="hero_title">{product.title}</h1>
            <p className="hero_text">{product.text}</p>
         </div>
      </Wrapper>
   );
}

export default PageHero;

const Wrapper = styled.section`
   background: #383838;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

   div {
      width: 90vw;
      max-width: 1180px;
      margin: 0 auto;
      padding: 6rem 2rem;
   }

   .hero_title {
      font-size: 3rem;
      margin-bottom: 2rem;
      letter-spacing: 0.1rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }
   .hero_text {
      font-size: 1.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.1rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }
   @media screen and (max-width: 768px) {
      .hero_title {
         font-size: 2rem;
      }
      .hero_text {
         font-size: 1.3rem;
      }
   }
`;
