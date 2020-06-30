import { createStore, combineReducers, applyMiddleware } from 'redux';
import pizzaReducer from '../reducers/pizzaReducer';
import employeeReducer from '../reducers/employeeReducer';
import thunk from 'redux-thunk'


const rootReducer = combineReducers(
    {
        pizza: pizzaReducer, 
        employee: employeeReducer,
    }
)

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;

