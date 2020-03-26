const initalState = {
    data : [],
    IndianData:{},
    IndiaStateData:[],
    Total:{
        "TotalCases":0,
        "TotalCured" :0,
        "TotalDeath":0,
        "Name":""
    }
};


export default (state=initalState,action) => {
    const newState = {...state};
    switch(action.type){
        case 'DATA_COMPLETED':
                newState.data = action.value; 
                var totalCases =0, totalDeath = 0,totalCured =0;
                action.value.forEach(element => {
                     totalCases+=element.cases;
                     totalDeath+=element.deaths;
                     totalCured+=element.recovered;
                 }); 
                 var obj = {
                     TotalCases :totalCases,
                     TotalCured :totalCured,
                     TotalDeath :totalDeath,
                     Name:"( World )"
                 };
                 newState.Total = obj;
        return newState;
        case 'INDIA_DATA_COMPLETED': 
            newState.IndianData = action.value;
            return newState;
        case 'INDIA_STATE_DATA_COMPLETED':
            var lastObj = action.value.find(x => x.State_Name === "Total number of confirmed cases in India");
            var obj = {
                TotalCured :lastObj.Cured_Discharged_Migrated,
                TotalDeath :lastObj.Death,
                TotalCases :parseInt(lastObj.Total_Confirmed_cases_Indian_National) + parseInt(lastObj.Total_Confirmed_cases_Foreign_National),
                Name:"( India )"
            };
            newState.Total = obj;
            newState.IndiaStateData = action.value;
            return newState;
            
        default:
            return initalState;
    }
    return state;
}