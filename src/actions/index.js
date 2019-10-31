export const loadData = payload => {
    return {
        type: 'LOAD_DATA',
        payload
    };
};

export const loadPage = () => {
    return {
        type: 'INCREMENT_CURRENT_PAGE'
    };
};