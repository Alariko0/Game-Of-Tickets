
class ApiService {

    constructor() {

    }

    getAllEvents = () => {
        return fetch('https://app.ticketmaster.com/discovery/v2/suggest.json?apikey=GHIICd92WtEyOeF3wAVOc5OgPwPQd2kt')
            .then((response) => {
                return response.json()
            })
    }

    getId = () => {
        return fetch('https://app.ticketmaster.com/discovery/v2/events/{id}.json?apikey=GHIICd92WtEyOeF3wAVOc5OgPwPQd2kt')
            .then((response) => {
                return response.json
            })
    }
}

module.exports = ApiService