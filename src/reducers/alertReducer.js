const alertReducer = (state = { isOpen: false, err: '' }, action) => {
    switch(action.type) {
        case 'SHOW_ALERT':
            return action.payload
        default:
            return state;
    }
}

export default alertReducer;