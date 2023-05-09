
const initalState = {

}

function rootReducer(state = initalState, action) {
    switch (action.type) {
        case "EXAMPLE":
            return {
                ...state,
            }
    
        default:
            return state;
    }
}

export default rootReducer