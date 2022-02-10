import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import { fetchLink, formatePhoneNumber } from "../utils/constants";

function ContactUs() {
   const [formValues, setFormValues] = useState({
      fio: "",
      phone: "",
      email: "",
      message: "",
   });
   const [formErrors, setFormErrors] = useState({});
   const [isSubmited, setIsSubmited] = useState(false);
   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "phone") {
         setFormValues((prevValue) => ({
            ...prevValue,
            phone: formatePhoneNumber(value, prevValue.phone),
         }));
      } else {
         setFormValues({ ...formValues, [name]: value });
      }
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmited(true);
   };

   const validate = (values) => {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.fio) {
         errors.fioError = "это поле не может быть пустым";
      }
      if (!values.phone) {
         errors.phoneError = "это поле не может быть пустым";
      }
      if (!values.email) {
         errors.emailError = "это поле не может быть пустым";
      } else if (!emailRegex.test(values.email)) {
         errors.emailError = "неправильный формат ";
      }
      if (!values.message) {
         errors.messageError = "это поле не может быть пустым";
      }
      return errors;
   };

   useEffect(() => {
      console.log("useEffect called");
      if (Object.keys(formErrors).length === 0 && isSubmited) {
         console.log(formValues);
         setFormValues({ fio: "", phone: "", email: "", message: "" });
      }
   }, [formErrors, isSubmited]);

   return (
      <Wrapper>
         <h1 className="section_title">связаться с нами</h1>
         <form className="contact_form" onSubmit={handleSubmit}>
            <label>полное имя</label>
            <input
               type="text"
               placeholder="фамилия имя отчество"
               className="input_field full_name"
               name="fio"
               value={formValues.fio}
               onChange={handleChange}
            />
            {formErrors.fioError && (
               <span className="error_message">{formErrors.fioError}</span>
            )}
            <label>номер телефона</label>

            <input
               type="tel"
               placeholder="+7 (999) 999-99-99"
               className="input_field phone"
               name="phone"
               value={formValues.phone}
               onChange={handleChange}
            />
            {formErrors.phoneError && (
               <span className="error_message">{formErrors.phoneError}</span>
            )}
            {/*<InputMask*/}
            {/*    mask="+7 (999) 999-99-99"*/}
            {/*    maskChar=" "*/}
            {/*    className="input_field phone"*/}
            {/*    ref={Phone}*/}
            {/*    required="true"*/}
            {/*/>;*/}
            <label>электронная почта</label>

            <input
               placeholder="example@example.com"
               className="input_field email"
               name="email"
               value={formValues.email}
               onChange={handleChange}
            />
            {formErrors.emailError && (
               <span className="error_message">{formErrors.emailError}</span>
            )}
            <textarea
               cols="30"
               rows="10"
               placeholder="Сообщение..."
               className="message"
               name="message"
               value={formValues.message}
               onChange={handleChange}
            ></textarea>
            {formErrors.messageError && (
               <span className="error_message">{formErrors.messageError}</span>
            )}
            <input
               type="submit"
               value="отправить"
               className="btn btn_light submit"
            />
         </form>
      </Wrapper>
   );
}

export default ContactUs;

const Wrapper = styled.section`
   flex: 4;
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
   .contact_form {
      display: flex;
      /* width: 80vw; */
      /* max-width: 400px; */
      /* margin: 3rem auto; */
      margin-top: 4rem;
      flex-direction: column;
      align-items: center;
      label {
         align-self: flex-start;
         margin-bottom: 1rem;
         font-size: 1.5rem;
         text-transform: capitalize;
         margin-left: 0.5rem;
         &:not(:first-child) {
            margin-top: 1rem;
         }
      }
   }
   .input_field {
      width: 100%;
      height: 3rem;
      color: #141414;
      padding: 2rem 1rem;
      border-radius: 1rem;
      border: 0.2rem solid #141414;
      /* margin-bottom: 2rem; */
      text-indent: 1rem;
      outline: none;
      font-size: 1.5rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
   }

   .message {
      width: 100%;
      resize: none;
      outline: none;
      font-size: 1.5rem;
      height: 15rem;
      color: #141414;
      padding: 2rem 1rem;
      border-radius: 1rem;
      border: 0.2rem solid #141414;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      text-indent: 1rem;
      margin-top: 1rem;
   }
   .error_message {
      margin: 1rem 0;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      color: red;
      text-transform: capitalize;
   }
   .submit {
      font-weight: 700;
      letter-spacing: 0.1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      margin-top: 1rem;

      &:hover {
         background-color: #fff;
         color: #141414;
      }
   }
   @media screen and (max-width: 768px) {
      order: 2;
      .section_title {
         font-size: 2rem;
      }
      .input_field {
         padding: 1.2rem 0;
         font-size: 1.2rem;
      }
      .message {
         padding: 1.2rem 0;
         font-size: 1.2rem;
      }
   }
`;

// const FullName = useRef(null);
// const Email = useRef(null);
// const Message = useRef(null);
// const Phone = useRef(null);

// function handleSubmit() {
//    const messageInfo = {
//       Email: Email.current.value,
//       Phone: Phone.current.value,
//       FullName: FullName.current.value,
//       Message: Message.current.value,
//       Subject: "Вопрос с сайта",
//    };

//    if (
//       !messageInfo.FullName ||
//       !messageInfo.Email ||
//       !messageInfo.Message ||
//       !messageInfo.Phone
//    ) {
//       return;
//    }

//    const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(messageInfo),
//    };

//    const request = async () => {
//       const response = fetch(fetchLink + "SendMail", requestOptions)
//          .then((r) => r.json())
//          .then((res) => {
//             if (res) {
//                alert({ message: res });
//             }
//          });
//       const json = await response.json();
//       alert(json);
//    };
//    request();
// }
