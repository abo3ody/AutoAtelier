import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { ADD_TO_CART, selectCart } from "../features/cartSlice";

function Receipt() {
   const { cartItem } = useSelector(selectCart);
   const dispatch = useDispatch();

   const addToCart = (item) => {
      dispatch(ADD_TO_CART(item));
   };
   return (
      <Wrapper>
         <p className="price">
            <span>Сумма Заказа : </span>
            {cartItem.price} руб.
         </p>
         <Link to="/cart" className="add_to_cart">
            <button
               to="/cart"
               className="btn"
               onClick={() => addToCart(cartItem)}
            >
               ДОБАВИТЬ В КОРЗИНУ
            </button>
         </Link>
      </Wrapper>
   );
}

export default Receipt;

const Wrapper = styled.div`
   margin: 0 auto;
   text-align: center;
   background: #383838;
   padding: 2rem;
   margin-bottom: 1rem;

   .price {
      font-size: 2rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
      margin-bottom: 1.5rem;
      span {
         text-transform: uppercase;
         color: #ffd700;
      }
   }
`;
