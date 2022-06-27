import Counter from './Counter'
import Auth from './Auth'
import { combineReducers } from 'redux'
 const ALLREDUCERS = combineReducers({
     Counter,
     Auth
 })
 export default ALLREDUCERS;