import reducer from '../../js/redux/caregiver/reducer'
import * as types from '../../js/redux/caregiver/types'



describe('todos reducer', ()=> {
  it('should return the initial state', () => {
      expect(reducer(undefined,{})).toEqual({})
  })

})

//**********************
// Reducer test example
//**********************
//
//  it('should handle ADD_TODO', () => {
//    expect(
//      reducer([], {
//        type: types.ADD_TODO,
//        text: 'Run the tests'
//      })
//    ).toEqual(
//      [
//        {
//          text: 'Run the tests',
//          completed: false,
//          id: 0
//        }
//      ]
//    )
//
//    expect(
//      reducer(
//        [
//          {
//            text: 'Use Redux',
//            completed: false,
//            id: 0
//          }
//        ],
//        {
//          type: types.ADD_TODO,
//          text: 'Run the tests'
//        }
//      )
//    ).toEqual(
//      [
//        {
//          text: 'Run the tests',
//          completed: false,
//          id: 1
//        },
//        {
//          text: 'Use Redux',
//          completed: false,
//          id: 0
//        }
//      ]
//    )
//  })
