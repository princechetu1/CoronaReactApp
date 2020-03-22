const initalState = {
    data : [],
    IndianData:{},
    IndiaStateData:[]
};

export default (state=initalState,action) => {
    const newState = {...state};
    switch(action.type){
        case 'DATA_COMPLETED':
                newState.data = action.value;
        return newState;
        case 'INDIA_DATA_COMPLETED':
            newState.IndianData = action.value;
            return newState;
        case 'INDIA_STATE_DATA_COMPLETED':
            newState.IndiaStateData = action.value;
            return newState;
            
        default:
            return initalState;
    }
    return state;
}