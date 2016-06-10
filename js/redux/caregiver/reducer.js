
const initialState = {}
export default function reducer(previousState = initialState, action){
  switch (action.type) {

    case 'LOAD_PATIENTS_SUCCESS':
      console.log(action)
      return Object.assign({}, action.result)
   
    default :
  	  return previousState;
 
  }
}
