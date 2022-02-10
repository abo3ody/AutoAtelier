import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectProduct } from "../features/productSlice";
import ProductTypes from "./ProductTypes";
import SingleOption from "./SingleOption";
import { ProductSets } from ".";

function Options() {
   const {
      product: { options = [] },
      product,
   } = useSelector(selectProduct);

   return (
      <Wrapper>
         {product.productTypes &&
            product.productTypes.map((type, index) => (
               <ProductTypes key={index} type={type} />
            ))}
         {options.map((option, index) => {
            if (option.type && option.type === product.type) {
               return <SingleOption key={index} option={option} />;
            }
            if (!option.type) {
               return <SingleOption key={index} option={option} />;
            }
            return null;
         })}
         <ProductSets
            sets={product.sets}
            active={product.set}
            name={product.pageName}
         />
      </Wrapper>
   );
}

export default Options;

const Wrapper = styled.div``;
