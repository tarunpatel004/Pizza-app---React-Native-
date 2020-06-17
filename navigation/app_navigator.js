import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PizzaSizeScreen from '../screens/pizza_size_screen';
import ChooseCrustScreen from '../screens/crust_screen';
import ChooseYourToppings from '../screens/toppings_screen';
import CheckYourPizza from '../screens/final_pizza_screen';


const mainNavigator = createStackNavigator(
    {
        pizzasize: {
            screen: PizzaSizeScreen,
            navigationOptions: {
                title: "Select pizza size"
            }
        },
        crust: {
            screen: ChooseCrustScreen,
            navigationOptions: {
                title: "Select crust type"
            }
        },
        toppings: {
            screen: ChooseYourToppings,
            navigationOptions: {
                title: "Select toppings"
            }
        },
        checkPizza: {
            screen: CheckYourPizza,
            navigationOptions: {
                title: "Pizza is ready"
            }
        },

    }, {
        initialRouteName: 'pizzasize'
    })

export const crust = "crust";
export default createAppContainer(
    mainNavigator);
