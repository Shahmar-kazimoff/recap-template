import { createSlice } from "@reduxjs/toolkit";

const basket = JSON.parse(localStorage.getItem("basket")) || []
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

export const BasketSlice = createSlice({
    name: "basket",
    initialState: {
        initialBasket: basket,
        initialWishlist: wishlist,
        total: basket.reduce((totals, item) => totals += item.price * item.count, 0)
    },
    reducers: {
        addBasket(state, action) {
            const existedIndex = state.initialBasket.findIndex(item => item.id === action.payload.id)
            existedIndex > -1 ? state.initialBasket[existedIndex].count += 1 : state.initialBasket.push(action.payload)
            state.total += action.payload.price
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        addWishlist(state, action) {
            const existedIndex = state.initialWishlist.findIndex(item => item.id === action.payload.id)
            existedIndex > -1 ? state.initialWishlist[existedIndex].count += 1 : state.initialWishlist.push(action.payload)
            state.total += action.payload.price
            localStorage.setItem("wishlist", JSON.stringify(state.initialWishlist))
        },
        removeBasket(state, action) {
            state.initialBasket = state.initialBasket.filter(item => item.id !== action.payload)
            state.total = state.initialBasket.reduce((totals, item) => totals += item.price * item.count, 0)
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        removeWishlist(state, action) {
            state.initialWishlist = state.initialWishlist.filter(item => item.id !== action.payload)
            state.total = state.initialWishlist.reduce((totals, item) => totals += item.price * item.count, 0)
            localStorage.setItem("wishlist", JSON.stringify(state.initialWishlist))
        },
        increaseItem(state, action) {
            const { id } = action.payload;
            const product = state.initialBasket.find(item => item.id === id);
            if (product) {
                product.count += 1;
                state.total += product.price;
                localStorage.setItem("basket", JSON.stringify(state.initialBasket));
            }
        },
        decreaseItem(state, action) {
            const { id } = action.payload;
            const product = state.initialBasket.find(item => item.id === id);
            if (product && product.count > 1) {
                product.count -= 1;
                state.total -= product.price;
                localStorage.setItem("basket", JSON.stringify(state.initialBasket));
            }
        },

        increaseItemModal(state, action) {
            const { id } = action.payload;
            let product = state.initialBasket.find(item => item.id === id);
            if (!product) {
                const newItem = action.payload;
                state.initialBasket.push(newItem);
                product = newItem;
            } else {
                product.count += 1;
            }
            state.total += product.price;
            localStorage.setItem("basket", JSON.stringify(state.initialBasket));
        },

        decreaseItemModal(state, action) {
            const { id } = action.payload;
            let product = state.initialBasket.find(item => item.id === id);
            if (product && product.count > 1) {
                product.count -= 1;
                state.total -= product.price;
                localStorage.setItem("basket", JSON.stringify(state.initialBasket));
            }
        },

        removeBasketAll(state, action) {
            state.initialBasket = []
            state.total = 0
            localStorage.setItem("basket", JSON.stringify(state.initialBasket))
        },
        removeWishlistAll(state, action) {
            state.initialWishlist = []
            state.total = 0
            localStorage.setItem("wishlist", JSON.stringify(state.initialWishlist))
        }
    }
})

export const { addBasket, removeBasket, increaseItem, decreaseItem, removeBasketAll, addWishlist, removeWishlist, removeWishlistAll, increaseItemModal, decreaseItemModal } = BasketSlice.actions
export default BasketSlice.reducer
