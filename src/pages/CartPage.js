import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { CartItems, CheckOut } from "../components";
import { COUNT_CART_TOTALS, selectCart } from "../features/cartSlice";

function CartPage() {
   const { cart } = useSelector(selectCart);

   const dispatch = useDispatch();
   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch(COUNT_CART_TOTALS());
      // eslint-disable-next-line
   }, [cart]);
   return (
      <Wrapper>
         <CartItems />
         <CheckOut />
      </Wrapper>
   );
}

export default CartPage;

const Wrapper = styled.main`
   width: 90vw;
   max-width: 1180px;
   margin: 3rem auto;
   display: grid;
   grid-template-columns: 2fr 1fr;
   grid-gap: 2rem;
   @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
   }
`;
