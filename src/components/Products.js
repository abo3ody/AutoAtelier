import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { products } from "../utils/constants";

function Products() {
   return (
      <Wrapper>
         <div className="cards">
            {products.map((product) => {
               const { smallImg, title, id, url } = product;
               return (
                  <article key={id} className="product_card">
                     <div className="product_img">
                        <img src={smallImg} alt={title} />
                     </div>
                     <Link to={url} className="btn product_btn">
                        {title}
                     </Link>
                  </article>
               );
            })}
         </div>
      </Wrapper>
   );
}

export default Products;

const Wrapper = styled.section`
   width: 90vw;
   max-width: 1180px;
   margin: auto;
   display: flex;
   flex-direction: column;
   padding-bottom: 5rem;
   /* border-bottom: 0.1rem solid gray; */
   .section_title {
      font-size: 3rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      text-align: center;
      margin: 2rem 0;
      position: relative;
      text-transform: capitalize;
      &::after {
         position: absolute;
         content: "";
         width: 9rem;
         height: 0.5rem;
         background-color: #ffd700;
         bottom: -1rem;
         left: 50%;
         transform: translateX(-50%);
      }
   }
   .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
      margin-top: 3rem;
   }
   .product_card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #383838;
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

      .product_btn {
         margin-top: 2rem;
         font-size: 1.5rem;
         font-weight: 500;
         text-align: center;
         &:hover {
            background-color: #fff;
            color: #141414;
         }
      }
   }
   .product_img {
      width: 18rem;

      height: 25rem;
      border: 0.2rem solid #fff;
      border-radius: 0.8rem;
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

      &::after {
         position: absolute;
         left: 0;
         top: 0;
         content: "";
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.4);
         border-radius: 0.8rem;
      }
      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 0.8rem;
      }
   }
   @media screen and (max-width: 834px) {
      .product_card {
         padding: 2rem 1rem;
      }
      .product_img {
         width: 15rem;
         height: 20rem;
      }
      .product_card {
         .product_btn {
            padding: 0.8rem;
            margin-top: 2rem;
            font-size: 1.2rem;
            font-weight: 500;
            text-align: center;
         }
      }
   }
   @media screen and (max-width: 768px) {
      .product_card {
         padding: 2rem 0.5rem;
      }
      .product_img {
         width: 13rem;
         height: 18rem;
      }
      .section_title {
         font-size: 2rem;
      }
   }
   @media screen and (max-width: 667px) {
      .product_card {
         padding: 2rem 0.5rem;
      }
      .product_img {
         width: 13rem;
         height: 19rem;
      }
      .cards {
         grid-template-columns: repeat(2, 1fr);
      }
   }
`;
