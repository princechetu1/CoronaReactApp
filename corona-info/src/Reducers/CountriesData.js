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
            var totalCases =0, totalDeath = 0,totalCured =0;
                action.value.forEach(element => {
                    if((element.Total_Confirmed_cases_Indian_National != undefined && element.Death != undefined && 
                        element.Cured_Discharged_Migrated != undefined ) || (element.Total_Confirmed_cases_Indian_National != null && element.Death != null && 
                        element.Cured_Discharged_Migrated != null)){
                        totalCases+=parseInt(element.Total_Confirmed_cases_Indian_National);
                        totalDeath+=parseInt(element.Death);
                        totalCured+=parseInt(element.Cured_Discharged_Migrated);
                    }
                 });
            var obj = {
                TotalCured :totalCured,
                TotalDeath :totalDeath,
                TotalCases :totalCases,
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