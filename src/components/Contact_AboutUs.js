import styled from "styled-components/macro";
import { AboutUs, ContactUs } from ".";

function Contact_AboutUs() {
   return (
      <Wrapper>
         <ContactUs />
         <AboutUs />
      </Wrapper>
   );
}

export default Contact_AboutUs;

const Wrapper = styled.section`
   width: 90vw;
   max-width: 1180px;
   margin: auto;
   display: flex;
   border-bottom: 0.1rem solid gray;
   /* justify-content: center; */
   /* align-items: center; */
   flex: 12;
   padding: 5rem 0;
   @media screen and (max-width: 768px) {
      flex-direction: column;
   }
`;
