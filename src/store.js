import { createStore } from 'redux'
import reducers from './ducks/reducers'

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())