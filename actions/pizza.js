import { SELECT_PIZZA_CRUST, SELECT_PIZZA_SIZE, SELECT_PIZZA_TOPPINGS, RESET } from './types'

export const selectPizzaSize = (pizza) => ({
    type: SELECT_PIZZA_SIZE,
    data: pizza,
})


export const selectPizzaCrust = (pizza) => ({
    type: SELECT_PIZZA_CRUST,
    data: pizza,
})


export const selectPizzaToppings = (pizza) => ({
    type: SELECT_PIZZA_TOPPINGS,
    data: pizza,
})

export const reset = () => ({
    type: RESET,
})