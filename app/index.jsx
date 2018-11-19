import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import App from './components/App';
import stores from './stores';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.router);


const rootDomNode = document.getElementById('root');
reactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
     rootDomNode
);