import { SELECT_PIZZA_CRUST, SELECT_PIZZA_TOPPINGS, SELECT_PIZZA_SIZE, RESET } from '../actions/types';
import DummyData from '../common/dummyData'

const initState = {
    
    pizzaSizeList: DummyData.pizzaSize,
    pizzaCrustList: DummyData.crustList,
    pizzaToppingsList: DummyData.toppingList,

    selectedPizzaSize: DummyData.pizzaSize[0],
    selectedPizzaCrust: DummyData.crustList[0],
    selectedPizzaToppings: []
}

const pizzaReducer = (state = initState, action) => {
    switch (action.type) {

        case SELECT_PIZZA_SIZE: {
            //here we only select one size of the pizza
            let newList = state.pizzaSizeList.map(item => (
                item.id == action.data.id ? { ...item, selected: true } : { ...item, selected: false }
            ))
            return { ...state, pizzaSizeList: newList, selectedPizzaSize: action.data };
        }

        case SELECT_PIZZA_CRUST: {
            //here we only select one curst for the pizza
            let newList = state.pizzaCrustList.map(item => (
                item.id == action.data.id ? { ...item, selected: true } : { ...item, selected: false }
            ))
            return { ...state, pizzaCrustList: newList, selectedPizzaCrust: action.data };
        }

        case SELECT_PIZZA_TOPPINGS: {

            //Toppings can be multiple so we are adding that here 
            let newList = state.pizzaToppingsList.map(item => (
                item.id == action.data.id ? { ...item, selected: !item.selected } : item
            ))

            if (action.data.selected) {
                return {
                    ...state, pizzaToppingsList: newList, selectedPizzaToppings: state.selectedPizzaToppings.filter((item) => item.id !== action.data.id)
                };
            } else {
                return {
                    ...state, pizzaToppingsList: newList, selectedPizzaToppings: state.selectedPizzaToppings.concat({

                        id: action.data.id,
                        name: action.data.name,
                        selected: true,
                        image: action.data.image

                    })
                };
            }
        }

        case RESET: {
            return state = initState
        }

        default:
            return state
    }
}

export default pizzaReducer;