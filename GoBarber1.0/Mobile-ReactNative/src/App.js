import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import RoutesManager from '~/routes/RoutesManager';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar backgroundColor="#301199" />
                <RoutesManager />
            </PersistGate>
        </Provider>
    );
}
