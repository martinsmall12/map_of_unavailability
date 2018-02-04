import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import ApplicationList from './components/ApplicationList';
import AddApplication from './components/AddApplication';

const store = configureStore();

render(
    <Provider store={store}>
        <div>
            <div className="container mb-5">
                <AddApplication/>
            </div>
            <div className="container">
                <ApplicationList/>
            </div>
        </div>
    </Provider>,
    document.getElementById('app')
);
