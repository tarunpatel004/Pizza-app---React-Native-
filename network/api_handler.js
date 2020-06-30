import async from 'react';
const axios = require('axios').default;

export default class APIHandler {
    async getCategories() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch(error => {
                console.log(error)
                return undefined;
            }) //to catch the errors if any
    }



}

