import {combineReducers} from 'redux'
import courseReducer from './course'
import userReducer from './user'
const rootReducer= combineReducers({
    course: courseReducer,
    user: userReducer
})

export default rootReducer