import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { applyMiddleware } from 'redux';

import { initMatch } from './engine/actions/match';
import matchReducer from './engine/reducers/match';
import matchMiddleware from './engine/middlewares/MatchMiddleware';

const middlewares = applyMiddleware(matchMiddleware);
const store = createStore(matchReducer, middlewares);

store.dispatch(initMatch());

render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root')
)