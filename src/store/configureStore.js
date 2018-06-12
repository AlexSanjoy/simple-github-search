import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const enhance = composeWithDevTools(
	applyMiddleware(thunk)
)

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState, enhance)
}