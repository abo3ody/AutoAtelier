import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { SingleCartItem } from ".";
import { CLEAR_CART, selectCart } from "../features/cartSlice";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

function CartItems() {
   const { cart } = useSelector(selectCart);
   const dispatch = useDispatch();
   if (cart.length < 1) {
      return (
         <Wrapper>
            <div className="empty">
               <h1>Ваша корзина пуста</h1>
               <Link to="/products" className="btn">
                  перейти на страницу товаров
               </Link>
            </div>
         </Wrapper>
      );
   }
   return (
      <Wrapper>
         <div className="header">
            <h1>корзина</h1>
         </div>
         <ul className="cart_items">
            {cart.map((item) => (
               <SingleCartItem key={item.id} item={item} />
            ))}
         </ul>

         <div className="cart_footer">
            <Link to="/products" className="continue_shopping">
               продолжить покупки
            </Link>
            <div
               className="delete_all_products"
               onClick={() => dispatch(CLEAR_CART())}
            >
               <FaTimes />
               <p>удалить все товары</p>
            </div>
         </div>
      </Wrapper>
   );
}

export default CartItems;

const Wrapper = styled.section`
   background: #383838;
   border-radius: 0.5rem;
   padding: 1rem 2rem;
   align-self: start;
   .empty {
      height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1 {
         font-size: 3rem;
         margin-bottom: 2rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         letter-spacing: 0.1rem;
      }
      a {
         font-size: 1.5rem;
      }
   }
   .header {
      padding: 1rem;
      border-bottom: 0.1rem solid gray;
      h1 {
         font-size: 2rem;
         text-transform: uppercase;
         letter-spacing: 0.1rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         color: #ffd700;
      }
   }
   .delete_all_products {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.1rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: color 0.3s ease-in-out;
      margin-bottom: 1rem;
      p {
         font-size: 1.5rem;
      }
      svg {
         font-size: 2rem;
         margin-right: 0.5rem;
      }
      &:hover {
         color: #ffd700;
      }
   }
   .cart_items {
      margin: 1rem;
   }
   .cart_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 0.1rem solid gray;
      padding: 1rem;
      .continue_shopping {
         background: #fff;
         color: #383838;
         padding: 1rem;
         font-size: 1.5rem;
         font-weight: 500;
         letter-spacing: 0.1rem;
         border-radius: 0.5rem;
         &:hover {
            opacity: 0.8;
         }
      }
   }
   @media screen and (max-width: 667px) {
      .empty {
         h1 {
            font-size: 2rem;
         }
         a {
            font-size: 1.3rem;
         }
      }
      .header {
         h1 {
            font-size: 1.5rem;
         }
      }
      .cart_footer {
         flex-direction: column;
      }

      .continue_shopping {
         order: 2;
      }
   }
`;
