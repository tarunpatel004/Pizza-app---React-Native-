import { API_CALLING, EMPLOYEE_ERROR, EMPLOYEE_RESPONSE } from '../actions/types';

const initialState = {
    isLoading: false,
    employeeList: [],
    employeeListError: null
}

const employeeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case API_CALLING:
            return { ...state, isLoading: true }
        case EMPLOYEE_RESPONSE:
            return { ...state, isLoading: false, employeeList: actions.data, employeeListError: null }
        case EMPLOYEE_ERROR:
            return { ...state, isLoading: false, employeeListError: actions.error, employeeList: [] }
        default:
            return state;
    }
}

export default employeeReducer;