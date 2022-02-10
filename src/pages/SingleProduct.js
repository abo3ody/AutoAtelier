import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { PageHero, PlaceOrder, Receipt } from "../components";
import { SET_CART_ITEM } from "../features/cartSlice";
import { GET_PRODUCT } from "../features/productSlice";
import { products } from "../utils/constants";

function SingleProduct() {
   const dispatch = useDispatch();
   const { id } = useParams();

   const product = products.find((product) => product.pageName === id);

   useEffect(() => {
      dispatch(GET_PRODUCT(product));
      dispatch(SET_CART_ITEM(product));
      // eslint-disable-next-line
   }, [product]);

   return (
      <Wrapper>
         <PageHero />
         <PlaceOrder />
         <Receipt />
      </Wrapper>
   );
}

export default SingleProduct;

const Wrapper = styled.section``;
