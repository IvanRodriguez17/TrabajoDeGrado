export const initialState = {
    basket: [],
    user: null,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    SET_USER: "SET_USER",
}

export const getBasketTotal = (basket) => {
    let ammount = 0;
    for (var i=0; i<basket.length;i++) {
        console.log(basket[i].price);
        ammount = ammount + basket[i].price;
    }
    return ammount;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id));
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log("No se puede remover el producto")
            }
            return {
                ...state,
                basket: newBasket,
        };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default: return state;
    }
    
}

export default reducer;