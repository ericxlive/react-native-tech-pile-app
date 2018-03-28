import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Libraries from './src/components/Libraries';

const App = () => (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, paddingTop: 30 }}>
          <Libraries />
        </View>
      </Provider>
    );
    
export default App;
