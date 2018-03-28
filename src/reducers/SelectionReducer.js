// state = null because we don't need undefined on first sign.
export default (state = null, action) => {
    //console.log(action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
};
