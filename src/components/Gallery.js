import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectProduct } from "../features/productSlice";

function Gallery() {
   const { gallery = [] } = useSelector(selectProduct);
   return (
      <Wrapper>
         {gallery.map((image) => (
            <img key={image.id} src={image.imgUrl} alt="constructor" />
         ))}
      </Wrapper>
   );
}

export default Gallery;

const Wrapper = styled.article`
   width: 80%;
   height: 40rem;
   margin: 0 auto;
   position: relative;
   background: #fff;
   border-radius: 1.5rem;
   img {
      position: absolute;
      object-fit: contain;
      width: 100%;
      height: 100%;

      padding: 1rem 0;
   }
   @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 2rem;
   }
`;
