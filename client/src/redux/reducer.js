export default (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                updated: action.payload.ticker,
            };

        default:
            return state;
    }
}
