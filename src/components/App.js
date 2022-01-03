import '../App.css';
import Main from './Main';
import {useState, useEffect} from 'react';
import * as api from '../utils/Api';

function App() {

    const [flights, setIsFlights] = useState([]);


    useEffect(() => {
        api.getFlights()
            .then((allTickets) => {
                console.log(allTickets)
                setIsFlights(allTickets);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, []);

  return (
    <div className="page">
      <header className="header page__item"/>
      <Main
          flights={flights}/>
      <footer/>
    </div>
  );
}

export default App;
