'use strict'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../js/redux/caregiver/actions'

const middleware = [ thunk ]
const mockStore = configureMockStore(middleware) 

describe('test', ()=>{
  it('should be created new test', () => {
    expect(actions.loadPatients(234)).toEqual("234")
  })
})


//describe('actions', () => {
//  it('should create an action to add a todo', () => {
//    const text = 'Finish docs'
//    const expectedAction = {
//      type: types.ADD_TODO,
//      text
//    }
//    expect(actions.addTodo(text)).toEqual(expectedAction)
//  })
//})


//describe('async actions', () => {
//  afterEach(() => {
//    nock.cleanAll()
//  })
//
//  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//    nock('http://example.com/')
//      .get('/todos')
//      .reply(200, { body: { todos: ['do something'] }})
//
//    const expectedActions = [
//      { type: types.FETCH_TODOS_REQUEST },
//      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something']  } }
//    ]
//    const store = mockStore({ todos: [] })
//
//    return store.dispatch(actions.fetchTodos())
//      .then(() => { // return of async actions
//        expect(store.getActions()).toEqual(expectedActions)
//      })
//  })
//})
