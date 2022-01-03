import AirFrance from '../images/AirFrance.png';
import aeroflot from '../images/aeroflot.png';
import klm from '../images/klm.jpg';
import turkish from '../images/turkish.png';
import finnair from '../images/finnair.png';
import baltic from '../images/logo-airbaltic.png';
import alitalia from '../images/alitalia.png';
import pegas from '../images/pegasus-airlines.png';
import austrian from '../images/austrian.png';
import swiss from '../images/logo-swiss-international-air-lines.png';
import lot from '../images/lot.png';
import {useState} from 'react';

function Ticket({flight}) {
    
    let transferFrom = flight.flight.legs[0].segments.length>1;
    let transferBack = flight.flight.legs[1].segments.length>1;

    const airline = flight.flight.legs[0].segments[0].airline.caption;

    //Отлет для первой части билета
    const departureCityFrom = flight.flight.legs[0].segments[0].departureCity;
    const departureAirportFrom = flight.flight.legs[0].segments[0].departureAirport;
    const departureDateFrom = flight.flight.legs[0].segments[0].departureDate;
    //Прилет для первой части билета
    const arrivalCityFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalCity
        : flight.flight.legs[0].segments[0].arrivalCity;
    const arrivalAirportCityFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalAirport
        : flight.flight.legs[0].segments[0].arrivalAirport;
    const arrivalDateFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalDate
        : flight.flight.legs[0].segments[0].arrivalDate;

    //Отлет для второй части билета
    const departureCityBack = flight.flight.legs[1].segments[0].departureCity;
    const departureAirportBack = flight.flight.legs[1].segments[0].departureAirport;
    const departureDateBack = flight.flight.legs[1].segments[0].departureDate;
    //Прилет для второй части билета
    const arrivalCityBack = transferBack ? flight.flight.legs[1].segments[1].arrivalCity
        : flight.flight.legs[1].segments[0].arrivalCity;
    const arrivalAirportCityBack = transferBack ? flight.flight.legs[1].segments[1].arrivalAirport
        : flight.flight.legs[1].segments[0].arrivalAirport;
    const arrivalDateBack = transferBack ? flight.flight.legs[1].segments[1].arrivalDate
        : flight.flight.legs[1].segments[0].arrivalDate;


    function whatsAirline() {
        if (airline == 'Air France') {
            return AirFrance
        } else if (airline == 'Аэрофлот - российские авиалинии') {
            return aeroflot
        } else if (airline == 'KLM') {
            return klm
        } else if (airline == 'TURK HAVA YOLLARI A.O.') {
            return turkish
        } else if (airline == 'Finnair Oyj') {
            return finnair
        } else if (airline == 'Air Baltic Corporation A/S') {
            return baltic
        } else if (airline == 'Alitalia Societa Aerea Italiana') {
            return alitalia
        } else if (airline == 'Pegasus Hava Tasimaciligi A.S.') {
            return pegas
        } else if (airline == 'Austrian Airlines') {
            return austrian
        } else if (airline == 'SWISS International Air Lines Ltd') {
            return swiss
        } else if (airline == 'LOT Polish Airlines') {
            return lot
        }
    }

    return (
        <div className="ticket">
            <div className="ticket__header">
                <img src={whatsAirline()} alt="Логотип авиакомпании" className="ticket__header-logo"/>
                <div className="ticket__header-price">
                    <span
                        className="ticket__header-price-value">{flight.flight.price.total.amount} &#x20bd;</span>
                    <span className="ticket__header-description">Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
            <div className="ticket__body">
                <div className="ticket__direction">
                    {`${departureCityFrom.caption}, 
                    ${departureAirportFrom.caption} 
                    (${departureAirportFrom.uid}) `}
                    &rarr;
                    {` ${ arrivalCityFrom==undefined ? '' : arrivalCityFrom.caption}, 
                    ${arrivalAirportCityFrom.caption} 
                    (${arrivalAirportCityFrom.uid})`}
                </div>
                <div className="ticket__time">
                    <span className="ticket__time-departure">{departureDateFrom}</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">{arrivalDateFrom}</span>
                </div>
                <p className={`ticket__change ${transferFrom ? '' : 'ticket__change_hidden'}`}>1 пересадка</p>
                <p className="ticket__carrier">Рейс выполняет: {airline}</p>
            </div>
            <div className="ticket__body">
                <p className="ticket__direction">
                    {`${departureCityBack==undefined ? '' : departureCityBack.caption}, 
                    ${departureAirportBack.caption} 
                    (${departureAirportBack.uid}) `}
                    &rarr;
                    {` ${ arrivalCityBack==undefined ? '' : arrivalCityBack.caption}, 
                    ${arrivalAirportCityBack.caption} 
                    (${arrivalAirportCityBack.uid})`}
                </p>
                <div className="ticket__time">
                    <span className="ticket__time-departure">{departureDateBack}</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">{arrivalDateBack}</span>
                </div>
                <p className={`ticket__change ${transferBack ? '' : 'ticket__change_hidden'}`}>1 пересадка</p>
                <p className="ticket__carrier">
                    Рейс выполняет: {flight.flight.legs[1].segments[0].airline.caption}
                </p>
            </div>
            <button className="ticket__button">Выбрать</button>

        </div>
    );
}

export default Ticket;