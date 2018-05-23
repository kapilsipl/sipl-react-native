import { combineReducers } from 'redux'
import people from './people'

/** Combine all the reducers and export */
const rootReducer = combineReducers({
    people
})

export default rootReducer