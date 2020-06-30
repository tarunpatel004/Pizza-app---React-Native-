import { EMPLOYEE_ERROR, API_CALLING, EMPLOYEE_RESPONSE } from './types'
import APICall from '../network/apicall'
export const isLoading = () => ({
    type: API_CALLING,
})


export const onAPIResponse = (data) => ({
    type: EMPLOYEE_RESPONSE,
    data: data,
})


export const onAPIError = (error) => ({
    type: EMPLOYEE_ERROR,
    error: error,
})

export const fetchEmployee = () => {
    return async dispath => {
        dispath(isLoading());


        try {
            // let respose = await APICall.getAPICall('http://dummy.restapiexample.com/api/v1/employees')
            // console.log('API respose', JSON.stringify(respose))

            let response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
            let json = await response.json();
            console.log('API Response', JSON.stringify(json))
            dispath(onAPIResponse(json.data));
        } catch (error) {
            dispath(onAPIError(error));
        }
    }
}
