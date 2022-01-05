import '../App.css';
import Main from './Main';
import {useState, useEffect} from 'react';
import * as api from '../utils/Api';

let allFlights = [];

function App() {


    const [flights, setFlights] = useState([]);
    // const [sort, setIsSort] = useState('ascending');
    // const [filterTransfer, setIsFilterTransfer] = useState('');
    // const [filterPrice, setIsFilterPrice] = useState(false);
    // const [filterAirlines, setIsFilterAirlines] = useState('');


    useEffect(() => {
        api.getFlights()
            .then((allTickets) => {
                console.log(allTickets);
                allFlights = allTickets;
                // setFlights(allTickets.slice(0, 2));
                sortFlights('ascending');
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, []);


    function sortFlights(sortValue) {
        // let sortedFlights;
        //цена возрастает
        if (sortValue == 'ascending') {
            console.log(sortValue);
            setFlights(() => {
                return allFlights.slice().sort((a, b) => (parseInt(a.flight.price.total.amount)
                    - parseInt(b.flight.price.total.amount)))
            });
        }
        //цена убывает
        else if (sortValue == 'descending') {
            console.log(sortValue);
            setFlights(() => {
                return allFlights.slice().sort((a, b) => (parseInt(b.flight.price.total.amount)
                    - parseInt(a.flight.price.total.amount)))
            });
        }
        //по времени пути
        else {
            console.log(sortValue);
            setFlights(() => {
                return allFlights.slice().sort((a, b) => (parseInt(a.flight.legs[0].duration)
                    - parseInt(b.flight.legs[0].duration)))
            });
        }
        console.log()
    }

    // function updateValue(event) {
    //     const value = event.target.value;
    //     console.log(value);
    //
    //     setFlights(() => {
    //         return {
    //             sortValue: value
    //         }
    //     });
    //
    //     sortFlights();
    // }

    console.log(flights)
    return (
        <div className="page">
            <header className="header page__item"/>
            <Main
                flights={flights}
                onSort={sortFlights}/>
            <footer/>
        </div>
    );
}

export default App;
