const currentPage = (state = 1, action) => {
    switch(action.type) {
        case 'INCREMENT_CURRENT_PAGE':
            return state + 1
        default:
            return state;
    }
}

export default currentPage;