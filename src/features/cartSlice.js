import { createSlice } from "@reduxjs/toolkit";
const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return [];
    }
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: getLocalStorage(),
        cartItem: {},
        total_items: 0,
        total_amount: 0,
    },

    reducers: {
        SET_CART_ITEM: (state, action) => {
            let arr = { productName: action.payload.title };
            const categories = action.payload.options.map((category) => {
                return {
                    ...arr,
                    [category.content[0].category]: category.content[0].Text,
                };
            });

            for (let i = 0; i < categories.length; i++) {
                arr = { ...arr, ...categories[i] };
            }
            return {
                ...state,
                cartItem: {
                    ...arr,
                    type: action.payload.type ? action.payload.type : null,
                    set: action.payload.set,
                    price: action.payload.price,
                    img: action.payload.galleryImgs[0].imgUrl,
                    /*description: action.payload.*/
                        amount: 1,
                },
            };
        },
        ADD_ITEM_OPTION: (state, action) => {
            return {
                ...state,
                cartItem: {
                    ...state.cartItem,
                    [action.payload.category]: action.payload.text,
                },
            };
        },
        ADD_TO_CART: (state, action) => {
            const { productName, base, border, type, line } = state.cartItem;
            const id = `${productName}${base}${border}${type}${line}`;

            return { ...state, cart: [...state.cart, { ...state.cartItem, id }] };
        },
        CLEAR_CART: (state) => {
            return { ...state, cart: [] };
        },
        REMOVE_CART_ITEM: (state, action) => {
            const tempCart = state.cart.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, cart: tempCart };
        },
        TOGGLE_CART_ITEM_AMOUNT: (state, action) => {
            const { id, value } = action.payload;
            const tempCart = state.cart.map((item) => {
                if (item.id === id) {
                    if (value === "inc") {
                        let newAmount = item.amount + 1;

                        return { ...item, amount: newAmount };
                    }
                    if (value === "dec") {
                        let newAmount = item.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return { ...item, amount: newAmount };
                    }
                }
                return item;
            });
            return { ...state, cart: tempCart };
        },
        COUNT_CART_TOTALS: (state) => {
            const { total_items, total_amount } = state.cart.reduce(
                (total, cartItem) => {
                    const { amount, price } = cartItem;
                    total.total_items += amount;
                    total.total_amount += price * amount;
                    return total;
                },
                {
                    total_items: 0,
                    total_amount: 0,
                }
            );
            return { ...state, total_items, total_amount };
        },
    },
});

export const {
    cart,
    cartItem,
    SET_CART_ITEM,
    ADD_ITEM_OPTION,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    COUNT_CART_TOTALS,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
