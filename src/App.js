import React, { Component } from 'react';
import './App.css';
import DoctorsContainer from './redux/doctors/DoctorsListContainer'
import { Provider } from 'react-redux';
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <DoctorsContainer/>
       
      </div>
      </Provider>
    );
  }
}

export default App;
