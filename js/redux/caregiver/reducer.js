const initialState = {}
export default function reducer(previousState = initialState, action){
  switch (action.type) {
    case 'LOAD_CAREGIVER_SUCCESS':
      return Object.assign({}, action.result)
   
    case 'LOAD_CAREGIVER_FAIL':
      return previousState

    case 'LOAD_HEALTHDATA_SUCCESS':
      previousState.shifts.map((shift) => {    
        if (shift.patient.id == action.id){
          shift.patient.healthData = action.data
        }
      })
      return Object.assign({}, previousState)  
   
    case 'ADD_HD_SUCCESS_CG':
      const state = Object.assign({}, previousState); 
      state.shifts.map((shift) => {         
      
        if (typeof shift.patient.healthData == "undefined") {
          return null
        }

        if (shift.patient.device_id == action.device_id){
          console.log("--------ACtion--------")
          console.log(action.data)
          const key = action.data.key
           
          const healthData = shift.patient.healthData
          healthData[key] = action.data
      
          return healthData
        }
      })
      
      return state  
   
    case 'UPDATE_HD_SUCCESS_CG':
      previousState.shifts.map((shift) => {
        if (shift.patient.device_id == action.id){
          shift.patient.healthData = action.data
        }
      })
      return Object.assign({}, previousState)  
    case 'DELETE_HD_SUCCESS_CG':
   
    default :
  	  return previousState;
 
  }
}

