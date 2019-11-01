const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return action.payload
        default:
            return state;
    }
}

export default postReducer;