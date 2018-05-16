import { combineReducers } from 'redux'
import people from './People'

/** Combine all the reducers and export */
const rootReducer = combineReducers({
    people
})

export default rootReducer