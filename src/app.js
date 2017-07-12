import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import AppWithNavState from './navigators/AppNavigator';

const App = () => {
    //temporarily disabled console warn because it was getting in the way of tabs on iOS
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducers)}>
        <AppWithNavState />
      </Provider>
    );
};

export default App;
