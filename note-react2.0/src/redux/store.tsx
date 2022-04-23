import { createStore } from 'redux'
import mainReducer from './reducers'


const Store = createStore(mainReducer)

export default Store