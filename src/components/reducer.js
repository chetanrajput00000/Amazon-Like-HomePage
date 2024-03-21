export const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
                return {
                    ...state,
                    cart: newCart
                };
            } else {
                console.warn(
                    `Can't remove product (id:${action.id}) as it's not in the cart!`
                );
                return state; // Return the current state if the item is not found in the cart
            }
        
        default:
            return state;
    }
};

export default reducer;
