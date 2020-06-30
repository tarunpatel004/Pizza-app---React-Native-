const axios = require('axios').default;

export const getAPICall = (apiName) => {
    if (apiName.length == 0) {
        return;
    }
    axios.get(apiName)
        .then(function (response) {
            // handle success
           return response;
        })
        .catch(function (error) {
            // handle error
            return error;
        })
        .finally(function () {
            // always executed
            return "Finally ";
        });

}


