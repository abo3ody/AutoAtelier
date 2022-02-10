import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { CHANGE_GALLERY_IMAGES } from "../features/productSlice";

function ProductTypes({ type }) {
   const { stepText, content } = type;
   const [selected, setSelected] = useState(content[0].text);
   const [isActive, setIsActive] = useState(1);

   const dispatch = useDispatch();

   const handleClick = (id, text, base, border, line, type) => {
      setIsActive(id);
      setSelected(text);
      dispatch(CHANGE_GALLERY_IMAGES({ base, border, line, type }));
   };
   useEffect(() => {
      setSelected(content[0].text);
   }, [content]);
   return (
      <Wrapper>
         <p className="title">{stepText}</p>
         <ul className="types">
            {content.map((item) => {
               const { id, text, img, base, border, line, type } = item;
               return (
                  <li
                     key={id}
                     onClick={() =>
                        handleClick(id, text, base, border, line, type)
                     }
                  >
                     <div
                        className={`circle  ${
                           id === isActive ? "active" : null
                        }`}
                     >
                        <img src={img} alt="" />
                     </div>
                  </li>
               );
            })}
         </ul>
         <p className="selected">
            <span> выбран : </span>
            {selected}
         </p>
      </Wrapper>
   );
}

export default ProductTypes;

const Wrapper = styled.div`
   background: #383838;
   padding: 1rem 2rem;
   margin-bottom: 1rem;
   border-radius: 1.5rem;
   .title {
      font-size: 1.7rem;
      font-weight: 600;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .types {
      display: flex;
      flex-wrap: wrap;
   }
   li {
      margin: 0.5rem;
      width: 4rem;
      height: 4rem;
   }
   .active {
      border: 3px solid #ffd700;
      transform: scale(1.1);
   }
   .selected {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
      span {
         color: #ffd700;
         font-weight: 500;
      }
   }
   img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
   }
   @media screen and (max-width: 768px) {
      text-align: center;

      .types {
         justify-content: center;
      }
   }
`;
