import styled from "styled-components/macro";

function login() {
    function handleChange(event) {
        alert("ok");
    }

    function handleSubmit() {
        alert("ok");
    }
    return (
        <Wrapper>
            <h1 className="section_title">Войти</h1>
            <form className="contact_form">
                <input
                    type="email"
                    placeholder="Email"
                    required="true"
                    className="input_field email"
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Пароль"
                    required="true"
                    className="input_field password"
                />
                <div className="float-container">
                    <div className="float-child">
                        <input
                            type="submit"
                            value="Войти"
                            className="btn btn_light submit"
                            onClick={handleSubmit}
                        />
                    </div>
                    <div className="float-child">
                        <input
                            type="submit"
                            value="Зарегистрироваться"
                            className="btn btn_light submit"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </form>
        </Wrapper>
    );
}

export default login;

const Wrapper = styled.section`
   width: 90vw;
   max-width: 1180px;
   margin: auto;
   /*border-bottom: 0.1rem solid gray;*/ /* color: #141414; */

    .float-container {
        width: 100%;
    }

    .float-child {
        width: 50%;
        float: left;
        justify-content: center;
        text-align: center;
    }
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
      width: 80vw;
      max-width: 400px;
      margin: 3rem auto;
      flex-direction: column;
      align-items: center;
   }
   .input_field {
      width: 100%;
      height: 3rem;
      color: #141414;
      padding: 2rem 1rem;
      border-radius: 1rem;
      border: 0.2rem solid #141414;
      margin-bottom: 2rem;
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
      margin-bottom: 2rem;
   }
   .submit {
      font-weight: 700;
      letter-spacing: 0.1rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      &:hover {
         background-color: #fff;
         color: #141414;
      }
   }
   @media screen and (max-width: 768px) {
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
