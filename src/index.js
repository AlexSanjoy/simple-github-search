import React from 'react';
import { render } from 'react-dom';
import './assets/index.css';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import App from './containers/App';

const store = configureStore()

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
