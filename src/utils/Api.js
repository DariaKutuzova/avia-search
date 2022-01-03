export const BASE_URL = 'http://localhost:8000'

function handleResponse(res) {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(res.status)
}

export function getFlights() {
    return fetch(`${BASE_URL}/result`, {
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