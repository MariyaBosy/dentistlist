import doctorReducer from './doctors/doctorReducer'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    doctor:doctorReducer
})

export default rootReducer