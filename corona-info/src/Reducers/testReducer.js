const initalState = {
    value : 20
};

const reducer = (state=initalState,action) => {
    const newState = {...state};
    switch(action.type){
        case 'TEST':
        newState.value += action.value;
        break;
    }
    return newState;
}