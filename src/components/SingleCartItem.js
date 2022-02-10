import React from "react";
import styled from "styled-components/macro";

import { FaMinus, FaPlus, FaTrash, FaChevronDown } from "react-icons/fa";
import {
   REMOVE_CART_ITEM,
   TOGGLE_CART_ITEM_AMOUNT,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

function SingleCartItem({ item }) {
   // console.log(item);
   const { id, img, productName: name, price, amount } = item;

   const dispatch = useDispatch();

   const removeCartItem = (id) => {
      dispatch(REMOVE_CART_ITEM(id));
   };
   const increase = (id) => {
      dispatch(TOGGLE_CART_ITEM_AMOUNT({ id, value: "inc" }));
   };
   const decrease = (id) => {
      dispatch(TOGGLE_CART_ITEM_AMOUNT({ id, value: "dec" }));
   };
   return (
      <Wrapper>
         <img src={img} alt={name} />
         <h4 className="title">{name}</h4>
         <div className="quantity">
            <FaMinus onClick={() => decrease(id)} />
            <p className="count">{amount}</p>
            <FaPlus onClick={() => increase(id)} />
         </div>
         <p className="price">{price * amount} руб.</p>
         <div className="delete_item" onClick={() => removeCartItem(id)}>
            <FaTrash />
            <p>удалить</p>
         </div>
         <div className="more_details">
            <FaChevronDown />
         </div>
      </Wrapper>
   );
}

export default SingleCartItem;

const Wrapper = styled.li`
   display: grid;
   grid-template-columns: 10rem repeat(4, 1fr) 4rem;
   align-items: center;
   padding: 0.5rem 0;
   background: #4f4f4f;
   border-radius: 0.5rem;
   margin-bottom: 1rem;
   justify-items: center;
   img {
      width: 7rem;
      height: 7rem;
      object-fit: contain;
   }
   .title {
      font-size: 1.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .quantity {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      .count {
         font-size: 1.5rem;
         padding: 0.5rem;
         background: #fff;
         color: #383838;
         border-radius: 0.5rem;
         margin: 0 1rem;
         font-weight: 700;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      svg {
         cursor: pointer;
         transition: color 0.3s ease-in-out;

         &:hover {
            color: #ffd700;
         }
      }
   }
   .price {
      font-size: 1.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .delete_item {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      svg {
         margin-right: 0.5rem;
         font-size: 1.5rem;
      }
      &:hover {
         color: #ffd700;
      }
   }
   .more_details {
      font-size: 1.5rem;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      &:hover {
         color: #ffd700;
      }
   }
   @media screen and (max-width: 667px) {
      grid-template-columns: 7rem repeat(2, minmax(2rem, 1fr));

      grid-template-areas:
         "img title title price"
         "img quantity delete showMore";
      img {
         grid-area: img;
      }
      .title {
         grid-area: title;
      }
      .quantity {
         grid-area: quantity;
      }
      .price {
         grid-area: price;
      }
      .delete_item {
         grid-area: delete;
         p {
            display: none;
         }
      }
      .more_details {
         grid-area: showMore;
      }
   }
`;
