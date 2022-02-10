import styled from "styled-components/macro";

function Contacts() {
   return (
      <Wrapper>
         <div className="map">
            <iframe
               src="https://yandex.com/map-widget/v1/?um=constructor%3Ab6af293ba9ee2bba45b34d64a6de3e00ef49952a3f38cbbc595f4d4688cce520&amp;source=constructor"
               frameBorder="0"
               title="our office"
            ></iframe>
         </div>
         <div className="info">
            <h1 className="title">контакты</h1>
            <div className="info_body">
               <div className="headers">
                  <p>
                     <span>EMAIL : </span> avtoatelie.ksv@gmail.com
                  </p>
                  <p>
                     <span>ТЕЛЕФОН : </span> +7 (906) 494-99-55
                  </p>
                  <p>
                     <span>режим работы : </span> Понедельник-Суббота :
                     9:00-18:00
                  </p>
                  <p>
                     <span>АДРЕС : </span>
                     Россия, Республика Северная Осетия — Алания, Владикавказ,
                     улица Курсантов-Кировцев, 13В
                  </p>
               </div>
            </div>
         </div>
      </Wrapper>
   );
}

export default Contacts;

const Wrapper = styled.section`
   width: 90vw;
   max-width: 1180px;
   margin: 3rem auto;
   display: flex;
   justify-content: center;
   /* border-top: 0.1rem solid gray; */
   padding-top: 2rem;
   .map {
      margin-right: 2rem;
      width: 500px;
      height: 400px;

      iframe {
         width: 100%;
         height: 100%;
         border-radius: 1.5rem;
      }
   }
   .info {
      flex: 1;
      background: #383838;
      border-radius: 1.5rem;

      padding: 1rem 2rem;
   }
   .title {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
   }
   .info_body {
      font-size: 1.5rem;
      display: flex;

      .headers {
         display: flex;
         flex-direction: column;
         flex: 1;
         margin-right: 1rem;

         span {
            color: #ffd700;
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         }
         p {
            margin-bottom: 1rem;
            letter-spacing: 0.1rem;
            line-height: 2.5rem;
            text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         }
      }
   }
   @media screen and (max-width: 834px) {
      .map {
         width: 300px;
      }
   }
   @media screen and (max-width: 768px) {
      padding-top: 0;
      flex-direction: column;

      .map {
         order: 2;
         width: 100%;
      }
      .info {
         order: 1;
         margin-bottom: 2rem;
      }
   }
`;
