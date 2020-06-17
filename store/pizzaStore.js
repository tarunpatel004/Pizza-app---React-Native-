import {createStore, combineReducers} from 'redux';
import pizzaReducer from '../reducers/pizzaReducer';


const rootReducer = combineReducers(
    {
    pizza: pizzaReducer
}
)

const configureStore = () => createStore(rootReducer);

 export default configureStore;

