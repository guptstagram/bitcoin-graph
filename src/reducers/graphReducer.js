const graphReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TREND_DATA_SUCCESS':
            return action.value;
        case "TREND_DATA_FAIL":
            return "Something went wrong..."
        default:
            return state;
    }
};

export default graphReducer;