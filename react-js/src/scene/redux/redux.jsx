import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './index.css';

//Creating a new store
const store = createStore(reducer);


//Provider is included in below code since uing providers it makes possible to access the data of stores to containers
class Redux extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Redux;
