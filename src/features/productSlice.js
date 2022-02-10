import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: { product: [], gallery: [] },

    reducers: {
        GET_PRODUCT: (state, action) => {
            return {
                ...state,
                product: action.payload,
                gallery: action.payload.galleryImgs,
            };
        },
        CHANGE_GALLERY_IMAGE: (state, action) => {
            const { category, imgUrl } = action.payload;
            const newGallery = state.gallery.map((i) =>
                i.name === category ? { ...i, imgUrl: imgUrl } : i
            );

            return {
                ...state,
                gallery: newGallery,
            };
        },
        CHANGE_GALLERY_IMAGES: (state, action) => {
            const { base, border, line, type } = action.payload;
            const newGallery = state.gallery.map((i) => {
                if (i.name === "base") {
                    return { ...i, imgUrl: base };
                }
                if (i.name === "border") {
                    return { ...i, imgUrl: border };
                }
                if (i.name === "line") {
                    return { ...i, imgUrl: line };
                }
                return i;
            });
            return {
                ...state,
                product: { ...state.product, type },
                gallery: newGallery,
            };
        },
        CHANGE_SET: (state, action) => {
            const { text, price } = action.payload;
            return { ...state, product: { ...state.product, set: text, price } };
        },
    },
});

export const {
    product,
    gallery,
    GET_PRODUCT,
    CHANGE_GALLERY_IMAGE,
    CHANGE_GALLERY_IMAGES,
    CHANGE_SET,
} = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
