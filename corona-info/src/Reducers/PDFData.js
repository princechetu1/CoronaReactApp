const initalState = {
    data : []
};

export default (state=initalState,action) => {
    const newState = {...state};
    switch(action.type){
        case 'PDF_FETCH_COMPLETED':
                newState.data = action.value;
        return newState;            
        default:
            return initalState;
    }
    return state;
}