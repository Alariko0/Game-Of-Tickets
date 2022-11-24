const axios = require('axios');

class ApiService {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=GHIICd92WtEyOeF3wAVOc5OgPwPQd2kt'
        })
    }

    getAllEvents = () => {
        return this.axiosApp.get('/events').then((res) => res.data)
    }

    getOneEvent = (eventId) => {
        return this.axiosApp.get(`/events/${eventId}`).then((res) => res.data)
    }
}

module.exports = ApiService