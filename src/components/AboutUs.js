import styled from "styled-components/macro";
import image from "../assets/ksv_logo.png";

function AboutUs() {
   return (
      <Wrapper>
         <h1 className="section_title">о нас</h1>
         <div className="about_us">
            <img src={image} alt="about us" />
            <div className="about_us_content">
               <h2>автоателье ксв</h2>
               <p>
                  Наше автоателье работает с 2013 года. Начали свой путь с
                  чистого листа, с производства ЭВА ковриков, когда ещё никто
                  толком о них не знал. Не имея швейного образования, мы каждый
                  день совершенствовали свои навыки и качество готовой
                  продукции. Со временем начали появляться новые люди, которые в
                  итоге прошли обучение в тюнинг школах, у признанных мастеров
                  швейного дела. Упорная работа, желание стать лучшими
                  производителями авто-аксессуаров, привели к тому, что мы не
                  нуждаемся в "дешёвой" рекламе дабы заманить к себе клиентов.
                  Наши довольные клиенты и есть основная наша реклама.
               </p>
            </div>
         </div>
      </Wrapper>
   );
}

export default AboutUs;

const Wrapper = styled.section`
   /* width: 90vw;
   max-width: 1180px; */
   /* margin: auto; */
   /* padding-bottom: 5rem; */
   flex: 8;
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
   .about_us {
      /* display: flex;
      justify-content: space-evenly; */
      display: grid;
      grid-template-columns: 22rem 1fr;
      justify-items: center;
      grid-gap: 1rem;
      margin-top: 4rem;
      height: 80%;
      img {
         width: 100%;
         height: 20rem;
         object-fit: contain;
      }
   }
   .about_us_content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: #383838;
      padding: 1rem 2rem;
      border-radius: 1.5rem;
      h2 {
         font-size: 2.5rem;
         text-transform: uppercase;
         width: 100%;
         letter-spacing: 0.1rem;
         margin-bottom: 1rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      p {
         font-size: 1.8rem;
         padding: 0.5rem;
         line-height: 2.5rem;
         letter-spacing: 0.1rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
   }
   @media screen and (max-width: 768px) {
      padding-bottom: 2rem;
      border-bottom: 0.1rem solid gray;
      .about_us {
         grid-template-columns: 1fr;
         margin-top: 3rem;
         img {
            margin-bottom: 2rem;
         }
      }
      .section_title {
         font-size: 2rem;
      }
      .about_us_content {
         h2 {
            font-size: 2rem;
            text-align: center;
         }
         p {
            font-size: 1.5rem;
            padding: 0.5rem;
            line-height: 2.5rem;
            letter-spacing: 0.1rem;
         }
      }
   }
`;
