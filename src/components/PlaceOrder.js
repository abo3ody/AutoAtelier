import React from "react";
import styled from "styled-components/macro";
import { Gallery, Options } from ".";

function PlaceOrder() {
   return (
      <Wrapper>
         <h1 className="order_title">Сформируйте свой заказ</h1>
         <div className="content_body">
            <Gallery />
            <Options />
         </div>
      </Wrapper>
   );
}

export default PlaceOrder;

const Wrapper = styled.main`
   width: 90vw;
   max-width: 1180px;
   margin: 0 auto;
   padding: 6rem 2rem;
   .order_title {
      font-size: 3rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
      margin-bottom: 4rem;
      position: relative;
      text-transform: capitalize;
      &::after {
         position: absolute;
         content: "";
         width: 15rem;
         height: 0.5rem;
         background-color: #ffd700;
         bottom: -2rem;
         left: 50%;
         transform: translateX(-50%);
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }
   }
   .content_body {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 6rem;
   }
   @media screen and (max-width: 768px) {
      width: 100vw;
      padding: 6rem 0;

      .order_title {
         font-size: 2rem;
      }
      .content_body {
         width: 90%;
         margin: 6rem auto;
         grid-template-columns: 1fr;
      }
   }
`;
