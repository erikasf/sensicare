const initialState = {}
export default function reducer(previousState = initialState, action){
  switch (action.type) {
    
    case 'LOAD_HOSPITAL_SUCCESS':
      console.log("lodaed health")
      return Object.assign({}, action.hospital)
 
 
    case 'SUCCESS_REGISTER_PATIENT':
      const state = previousState
      state.patients.push(action.patient)
      return Object.assign({}, previousState, state.patient)
 

    default :
  	  return previousState;
 
  }
  
}
