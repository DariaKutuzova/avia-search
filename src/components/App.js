import '../App.css';
import Main from './Main';
import {useState, useEffect} from 'react';
import * as api from '../utils/Api';

let allFlights = [];

function App() {

    const [checkedTransfer, setCheckedTransfer] = useState({filterOneTransfer: false, filterNoTransfer: false});
    const [inputValues, setInputValues] = useState({filterFrom: '', filterTo: ''});
    const [checkedAirlines, setCheckedAirlines] = useState({filterLot: false, filterAeroflot: false});
    const [sort, setSort] = useState('ascending');
    const [slice, setSlice] = useState(2);


    useEffect(() => {
        api.getFlights()
            .then((allTickets) => {
                allFlights = allTickets;

                sortFlights('ascending');
                filterTransfer({filterOneTransfer: false, filterNoTransfer: false});
                filterAirline({filterLot: false, filterAeroflot: false})
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, []);

    //Сортировка
    function sortFlights(sortValue) {
        setSort(sortValue);
    }

    function applySort(flights) {
        //цена возрастает
        if (sort === 'ascending') {
            return flights.sort((a, b) => (parseInt(a.flight.price.total.amount)
                - parseInt(b.flight.price.total.amount)))
        }
        //цена убывает
        else if (sort === 'descending') {
            return flights.sort((a, b) => (parseInt(b.flight.price.total.amount)
                - parseInt(a.flight.price.total.amount)))
        }
        //по времени пути
        else {
            return flights.sort((a, b) => (parseInt(a.flight.legs[0].duration)
                - parseInt(b.flight.legs[0].duration)))
        }
    }

    //Фильтрация
    function filterTransfer({filterOneTransfer, filterNoTransfer}) {
        setCheckedTransfer({filterOneTransfer, filterNoTransfer})
    }

    function applyFilterTransfer(flights) {
        let filteredArr = [];
        if (checkedTransfer.filterOneTransfer === false && checkedTransfer.filterNoTransfer === false) {
            return flights;
        }
        if (checkedTransfer.filterOneTransfer) {
            filteredArr = flights.filter(item => (item.flight.legs[0].segments.length > 1) ||
                (item.flight.legs[1].segments.length > 1))
        }
        if (checkedTransfer.filterNoTransfer) {
            filteredArr = filteredArr.concat(flights.filter(item => ((item.flight.legs[0].segments.length <= 1) ||
                (item.flight.legs[1].segments.length <= 1)) && (!filteredArr.includes(item))))
        }
        flights = filteredArr
        return flights;
    }

    function filterAirline({filterLot, filterAeroflot}) {
        setCheckedAirlines({filterLot, filterAeroflot})
    }

    function applyFilterAirline(flights) {
        let filteredArr = [];
        if (checkedAirlines.filterLot === false && checkedAirlines.filterAeroflot === false) {
            return flights;
        }
        if (checkedAirlines.filterLot) {
            filteredArr = flights.filter(item => (((item.flight.legs[0].segments[0].airline.caption) ||
                (item.flight.legs[1].segments[0].airline.caption)) === 'LOT Polish Airlines'))
        }
        if (checkedAirlines.filterAeroflot) {
            filteredArr = filteredArr.concat(flights.filter(item => (((item.flight.legs[0].segments[0].airline.caption)
                    || (item.flight.legs[1].segments[0].airline.caption)) === 'Аэрофлот - российские авиалинии')
                && (!filteredArr.includes(item))))
        }
        flights = filteredArr
        return flights;
    }

    function filterPrice({filterFrom, filterTo}) {
        setInputValues({filterFrom, filterTo})
    }

    function applyFilterPrice(flights) {
        let filteredArr = [];
        if (inputValues.filterFrom === '' && inputValues.filterTo === '') {
            return flights;
        } else {
            filteredArr = flights.filter(item => (parseInt(item.flight.price.total.amount) >= (inputValues.filterFrom || 0))
            && (parseInt(item.flight.price.total.amount) <= (inputValues.filterTo || 1000000)))
        }
        flights = filteredArr
        return flights;
    }

    function applySlice(flights) {
        return flights.slice(0, slice);
    }

    function addFlights() {
        setSlice(slice+2)
    }

    function applyAll() {
        let flightsCopy = allFlights.slice()
        flightsCopy = applyFilterTransfer(flightsCopy)
        flightsCopy = applyFilterAirline(flightsCopy)
        flightsCopy = applyFilterPrice(flightsCopy)
        flightsCopy = applySort(flightsCopy)
        flightsCopy = applySlice(flightsCopy)
        return flightsCopy;
    }

    let flights = applyAll()

    return (
        <div className="page">
            <header className="header page__item"/>
            <Main
                flights={flights}
                onSort={sortFlights}
                onCheckboxTransfer={filterTransfer}
                onFilterPrice={filterPrice}
                onCheckboxAirline={filterAirline}
                onAddFlights={addFlights}
            />
            <footer/>
        </div>
    );
}

export default App;
