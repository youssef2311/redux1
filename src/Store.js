import {createStore,combineReducers} from 'redux'
import InputReducer from './Reducers/Inputreducer'
import MainReducer from './Reducers/MainReducer'
const store=createStore(combineReducers({
  input:InputReducer,
  main:MainReducer
}))
export default store