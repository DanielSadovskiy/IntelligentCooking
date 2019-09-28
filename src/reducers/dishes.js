const initialState = {
    isLoading: true,
    dishes: [],
    sortedItem: 'all'
};
export const dishes = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DISHES':
            return {
                ...state,
                dishes: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}