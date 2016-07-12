const initialState = {healthData: []}
export default function reducer(previousState = initialState, action){
  switch (action.type) {
    
    case 'LOAD_HEALTHDATA_SUCCESS':
      console.log("lodaed health")
      return Object.assign({}, action.data)
    
    case 'ADD_HD_SUCCESS':
      let state = previousState
      state.healthData = typeof state.healthData == undefined ? [] : state.healthData
      state.healthData.push(action.payload)
      return Object.assign({}, state)
    
    case 'LOAD_PATIENT_SUCCESS':
      console.log(action)
      return Object.assign({}, previousState, action.patient)
   
    default :
  	  return previousState;
 
  }
  
}
