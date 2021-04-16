const priceReducer = (state = "", action) => {
    switch (action.type) {
        case 'CURRENT_VALUE_SUCCESS':
            return action.value;
        case "CURRENT_VALUE_FAIL":
            return "Something went wrong..."
        default:
            return state;
    }
};

export default priceReducer;