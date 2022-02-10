import styled from "styled-components/macro";
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ showFooter }) {
   return (
      <Wrapper>
         <div className="footer_info">
            <p>
               <span>Email: </span>avtoatelie.ksv@gmail.com
            </p>
            <p>
               <span>ТЕЛЕФОН: </span>+7 906 494 99 55
            </p>
            <p>
               <span>адрес: </span>Республика Северная Осетия — Алания,
               Владикавказ, улица Курсантов-Кировцев, 13В
            </p>
         </div>
         <div className="social_media">
            <Link
               to={{
                  pathname: "https://www.instagram.com/avtoatelie_ksv/?hl=en",
               }}
               target="_blank"
            >
               <FaInstagram className="insta_icon" />
            </Link>
            <Link
               to={{
                  pathname: "https://mssg.me/r/w/m/60d04f07c8f7fd001f9c50b6",
               }}
               target="_blank"
            >
               <FaWhatsapp className="watsapp_icon" />
            </Link>
            <Link to={{ pathname: "tel:+79064949955" }} target="_self">
               <FaPhone />
            </Link>
         </div>
      </Wrapper>
   );
}

export default Footer;

const Wrapper = styled.footer`
   width: 90vw;
   max-width: 1180px;
   /* height: 10vh; */
   margin: 0 auto;
   margin-top: auto;
   padding: 1rem 0;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .footer_info {
      display: flex;
      flex-direction: column;
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      padding: 1rem 0;
      p {
         margin-bottom: 0.5rem;
      }
      span {
         text-transform: uppercase;
         font-weight: 700;
      }
   }
   .social_media {
      font-size: 2.5rem;
      a {
         margin-right: 2rem;
         cursor: pointer;
         color: lightblue;
      }
      .insta_icon {
         color: #8a3ab9;
      }
      .watsapp_icon {
         color: #4fce5d;
      }
   }
   @media screen and (max-width: 834px) {
      justify-content: center;
      .footer_info {
         font-size: 1.1rem;
      }
      .social_media {
         margin-left: auto;
         font-size: 2rem;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         /* margin-left: 0.5rem; */
         a {
            margin-right: 0;
            padding: 1rem;
         }
      }
   }
`;
