import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { links } from "../utils/constants";
import logo from "../assets/ksv_logo.png";
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { total_items } = useSelector(selectCart);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <Wrapper>
            <button type="button" className="nav_toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="ksv logo" />
                </Link>
            </div>
            <div
                className={`${isSidebarOpen ? "menu_container show_sidebar" : "menu_container"
                    }`}
            >
                <div className="times" onClick={closeSidebar}>
                    <FaTimes />
                </div>
                <ul
                    className={`${isSidebarOpen ? "nav_menu show_sidebar" : "nav_menu"
                        }`}
                >
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id} onClick={closeSidebar}>
                                <NavLink
                                    exact
                                    to={url}
                                    className="nav_link"
                                    activeClassName="selected"
                                >
                                    {text}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="cart">
                <div className="float-container">
                    <div className="float-child">
                        <Link to="/cart">
                            <FaShoppingCart />
                            <span className="cart_value">{total_items}</span>
                        </Link>
                    </div>
                    <div className="float-child">
                        <Link to="/login">
                            <FaUser />
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Navbar;

const Wrapper = styled.nav`
   height: 6.5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90vw;
   max-width: 1180px;
   margin: 0 auto;

    .float-container {
        width: 100%;
    }

    .float-child {
        width: 50%;
        float: left;
        justify-content: center;
        text-align: center;
        padding-left: 35px;
    }

   .logo-container {
      width: 5rem;
   }
   .logo {
      width: 100%;
   }
   .menu_container {
      display: flex;
      height: 100%;
   }
   .nav_menu {
      display: flex;
      align-items: center;

      li {
         height: 100%;
         display: flex;
         align-items: center;
         margin: 0 2rem;
         font-size: 2rem;
         text-transform: capitalize;
         letter-spacing: 0.1rem;
         font-weight: 400;
      }
      .nav_link {
         height: 100%;
         display: flex;
         align-items: center;
         border-bottom: 0.3rem solid transparent;
         &:hover {
            transition: all 0.3s ease-in-out;
            color: #ffd700;
         }
      }

      .selected {
         color: #ffd700;
         border-bottom: 0.4rem solid #ffd700;
      }
   }
   .times {
      font-size: 3rem;
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      display: none;
      cursor: pointer;
   }

   .cart {
      position: relative;
      cursor: pointer;
      svg {
         font-size: 1.8rem;
         color: #fff;
         &:hover {
            transition: all 0.3s ease-in-out;
            color: #ffd700;
         }
      }
      .cart_value {
         font-size: 1.4rem;
         font-weight: 700;
         position: absolute;
         color: #141414;
         background-color: #ffd700;
         width: 2rem;
         height: 2rem;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 50%;
         top: -1rem;
         right: 3rem;
         padding: 1rem;
      }
   }
   .nav_toggle {
      background: transparent;
      border: transparent;
      color: #fff;
      cursor: pointer;
      display: none;
      svg {
         font-size: 2.5rem;
      }
   }
   @media screen and (max-width: 768px) {
      .nav_toggle {
         display: block;
      }
      .times {
         display: block;
      }
      .menu_container {
         position: fixed;
         left: 0;
         top: 0;
         bottom: 0;
         flex-direction: column;
         background-color: #141414;
         z-index: 100;
         width: 100vw;
         height: 100%;
         transform: translateX(-100%);
         transition: all 0.5s ease-in-out;
         overflow-y: scroll;
      }
      .nav_menu {
         flex-direction: column;

         position: absolute;
         width: 100%;
         top: 6rem;
         li {
            flex-direction: column;
            justify-content: center;
            width: 100%;
         }
         .nav_link {
            width: 100%;
            padding: 1rem 0;
            justify-content: center;
            border-bottom: none;
         }
         .selected {
            border-bottom: none;
         }
      }

      .show_sidebar {
         transform: translateX(0);
      }
      .cart {
         margin-right: 0px;
      }
      .login {
         margin-right: 1rem;
      }
   }
`;
