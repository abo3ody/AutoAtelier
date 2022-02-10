import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { CHANGE_SET } from "../features/productSlice";

function ProductSets({ sets = [], active, name }) {
    const dispatch = useDispatch();

    const handleClick = (text, price) => {
        dispatch(CHANGE_SET({ text, price }));
    };

    let ulElement;
    if (name === "bags") {
       ulElement = <ul className="sets">
            <li key={5}>
                <input
                    type="checkbox"
                    id="Добавить логотип"
                    readOnly
                />
                <label htmlFor="Добавить логотип">
                    <p>Добавить логотип</p>
                    <p className="price">500 руб.</p>
                </label>
            </li>
        </ul>
    }
    if (name === "leather-mats") {
        ulElement = <ul className="sets">
            <li key={5}>
                <input
                    type="checkbox"
                    id="Второй слой ворс"
                    readOnly
                />
                <label htmlFor="Второй слой ворс">
                    <p>Второй слой ворс</p>
                    <p className="price">3500 руб.</p>
                </label>
            </li>
        </ul>
    }
    return (
        <Wrapper>
            <p className="title">
                {name === "bags" ? "Выберите размер" : "Выберите комплектацию"}
            </p>
            <ul className="sets">
                {sets.map((set) => {
                    const { id, text, price } = set;
                    return (
                        <li key={id} onClick={() => handleClick(text, price)}>
                            <input
                                type="checkbox"
                                id={text}
                                checked={text === active ? true : false}
                                readOnly
                            />
                            <label htmlFor={text}>
                                <p>{text}</p>
                                <p className="price">{price} руб.</p>
                            </label>
                        </li>
                    );
                })}
            </ul>
            {ulElement}
        </Wrapper>
    );
}

export default ProductSets;

const Wrapper = styled.div`
   background: #4f4f4f;
   padding: 1rem 2rem;
   margin-bottom: 1rem;
   border-radius: 1.5rem;
   .title {
      font-size: 1.7rem;
      font-weight: 600;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .sets {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      li {
         margin: 1rem;
         font-size: 1.5rem;
         display: flex;
         align-items: center;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      input {
         width: 2rem;
         height: 2rem;
         margin-right: 1rem;
      }
      .price {
         font-weight: 700;
         color: #ffd700;
      }
   }
   @media screen and (max-width: 667px) {
      .sets {
         grid-template-columns: 1fr;
      }
   }
`;
