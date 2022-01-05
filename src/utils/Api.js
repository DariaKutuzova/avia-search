// для локального запуска
export const API_URL = 'http://localhost:8000/result'
// для запуска на gh-pages
// (node ./node_modules/gh-pages/bin/gh-pages.js -d build)
// export const API_URL = '/avia-search/flights.json'


// export const API_URL = 'http://localhost:8000/result'

function handleResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}

export function getFlights() {
    return fetch(`${API_URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        }
    })
        .then(handleResponse)
        .then((allFlights) => {
            return allFlights.flights
        })
}