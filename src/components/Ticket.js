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

    let transferFrom = flight.flight.legs[0].segments.length > 1;
    let transferBack = flight.flight.legs[1].segments.length > 1;

    const airlineFrom = flight.flight.legs[0].segments[0].airline.caption;
    const airlineBack = flight.flight.legs[1].segments[0].airline.caption;

    //Отлет для первой части билета
    //Аэропорты
    const departureCityFrom = flight.flight.legs[0].segments[0].departureCity;
    const departureAirportFrom = flight.flight.legs[0].segments[0].departureAirport;
    //Время отлета
    const departureDateFrom = flight.flight.legs[0].segments[0].departureDate;

    //Прилет для первой части билета
    //Аэропорты
    const arrivalCityFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalCity
        : flight.flight.legs[0].segments[0].arrivalCity;
    const arrivalAirportCityFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalAirport
        : flight.flight.legs[0].segments[0].arrivalAirport;
    //Время прилета
    const arrivalDateFrom = transferFrom ? flight.flight.legs[0].segments[1].arrivalDate
        : flight.flight.legs[0].segments[0].arrivalDate;
    const durationFrom = flight.flight.legs[0].duration;

    //Отлет для второй части билета
    //Аэропорты
    const departureCityBack = flight.flight.legs[1].segments[0].departureCity;
    const departureAirportBack = flight.flight.legs[1].segments[0].departureAirport;
    //Время отлета
    const departureDateBack = flight.flight.legs[1].segments[0].departureDate;

    //Прилет для второй части билета
    //Аэропорты
    const arrivalCityBack = transferBack ? flight.flight.legs[1].segments[1].arrivalCity
        : flight.flight.legs[1].segments[0].arrivalCity;
    const arrivalAirportCityBack = transferBack ? flight.flight.legs[1].segments[1].arrivalAirport
        : flight.flight.legs[1].segments[0].arrivalAirport;
    //Время прилета
    const arrivalDateBack = transferBack ? flight.flight.legs[1].segments[1].arrivalDate
        : flight.flight.legs[1].segments[0].arrivalDate;
    const durationBack = flight.flight.legs[1].duration;

    function convertDate(inputFormat) {
        const date = new Date(inputFormat)
            .toLocaleString('ru', {day: '2-digit', month: 'short'});
        const weekday = new Date(inputFormat)
            .toLocaleString('ru', {weekday: 'short'});
        return [date, weekday].join(' ');
    }

    function convertTime(inputFormat) {
        const time = new Date(inputFormat)
            .toLocaleString('ru', {hour: '2-digit', minute: '2-digit'});
        return time;
    }

    function formatDuration(durationInMinutes) {
        let hours = Math.trunc(durationInMinutes / 60);
        let minutes = durationInMinutes % 60;
        return hours + ' ч ' + minutes + ' мин';
    }

    //Логотипы авиакомпаний
    function whatsAirline() {
        switch (airlineFrom) {
            case 'Air France':
                return AirFrance;
                break;
            case 'Аэрофлот - российские авиалинии':
                return aeroflot;
                break;
            case 'KLM':
                return klm;
                break;
            case 'TURK HAVA YOLLARI A.O.':
                return turkish;
                break;
            case 'Finnair Oyj':
                return finnair;
                break;
            case 'Air Baltic Corporation A/S':
                return baltic;
                break;
            case 'Alitalia Societa Aerea Italiana':
                return alitalia;
                break;
            case 'Pegasus Hava Tasimaciligi A.S.':
                return pegas;
                break;
            case 'Austrian Airlines':
                return austrian;
                break;
            case 'SWISS International Air Lines Ltd':
                return swiss;
                break;
            case 'LOT Polish Airlines':
                return lot;
                break;
            default:
                return aeroflot;
                break;
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
                    ${departureAirportFrom.caption} `}
                    <span className="ticket__direction-uid">
                        {` (${departureAirportFrom.uid}) `}
                        &rarr;
                    </span>
                    {` ${arrivalCityFrom == undefined ? '' : arrivalCityFrom.caption}, 
                    ${arrivalAirportCityFrom.caption} `}
                    <span className="ticket__direction-uid">
                        {` (${arrivalAirportCityFrom.uid})`}
                    </span>
                </div>
                <div className="ticket__time">
                    <div className="ticket__time-departure">
                    <span className="ticket__time-hour">
                        {`${convertTime(departureDateFrom)} `}
                        </span>
                        <span className="ticket__time-date">
                        {convertDate(departureDateFrom)}
                    </span>
                    </div>
                    <div className="ticket__time-general">
                        <div className="ticket__watch">
                        </div>
                        <span>
                            {formatDuration(durationFrom)}
                        </span>
                    </div>
                    <div className="ticket__time-arrival">
                        <span className="ticket__time-date">
                        {convertDate(arrivalDateFrom)}
                    </span>
                        <span className="ticket__time-hour">
                        {` ${convertTime(arrivalDateFrom)}`}
                        </span>
                    </div>
                </div>
                <p className={`ticket__change ${transferFrom ? '' : 'ticket__change_hidden'}`}>1 пересадка</p>
                <p className="ticket__carrier">Рейс выполняет: {airlineFrom}</p>
            </div>
            <div className="ticket__body">
                <p className="ticket__direction">
                    {`${departureCityBack == undefined ? '' : departureCityBack.caption}, 
                    ${departureAirportBack.caption}`}
                    <span className="ticket__direction-uid">
                        {` (${departureAirportBack.uid}) `}
                        &rarr;
                    </span>
                    {` ${arrivalCityBack == undefined ? '' : arrivalCityBack.caption}, 
                    ${arrivalAirportCityBack.caption}`}
                    <span className="ticket__direction-uid">
                        {` (${arrivalAirportCityBack.uid})`}
                    </span>
                </p>
                <div className="ticket__time">
                    <div className="ticket__time-departure">
                    <span className="ticket__time-hour">
                        {`${convertTime(departureDateBack)} `}
                        </span>
                        <span className="ticket__time-date">
                        {convertDate(departureDateBack)}
                    </span>
                    </div>
                    <div className="ticket__time-general">
                        <div className="ticket__watch">
                        </div>
                        <span>
                        {formatDuration(durationBack)}
                    </span>
                    </div>
                    <div className="ticket__time-arrival">
                        <span className="ticket__time-date">
                        {convertDate(arrivalDateBack)}
                    </span>
                        <span className="ticket__time-hour">
                        {` ${convertTime(arrivalDateBack)}`}
                        </span>
                    </div>
                </div>
                <p className={`ticket__change ${transferBack ? '' : 'ticket__change_hidden'}`}>1 пересадка</p>
                <p className="ticket__carrier">
                    Рейс выполняет: {airlineBack}
                </p>
            </div>
            <button className="ticket__button">Выбрать</button>

        </div>
    )
        ;
}

export default Ticket;