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

export const showAlert = payload => {
    return {
        type: 'SHOW_ALERT',
        payload
    };
};