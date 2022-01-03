import {useState} from 'react';

function Ticket({flight}) {

    const [transferFrom, setIsTransferFrom] = useState(false);
    const [transferBack, setIsTransferBack] = useState(false);

    function checkTransferFrom() {
        if (flight.flight.legs[0].segment.length>1) {
            setIsTransferFrom(true)
        } else setIsTransferFrom(false)
    }

    function checkTransferBack() {
        if (flight.flight.legs[1].segment.length>1) {
            setIsTransferBack(true)
        } else setIsTransferBack(false)
    }

    return (
        <div className="ticket">
            <div className="ticket__header">
                <img src="#" alt="Логотип авиакомпании" className="ticket__header-logo"/>
                <div className="ticket__header-price">
                    <span
                        className="ticket__header-price-value">{flight.flight.price.total.amount} &#x20bd;</span>
                    <span className="ticket__header-description">Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
            <div className="ticket__body">
                <div className="ticket__direction">{`${flight.flight.legs[0].segments[0].departureCity.caption}, 
                    ${flight.flight.legs[0].segments[0].departureAirport.caption} 
                    (${flight.flight.legs[0].segments[0].departureAirport.uid}) `}
                    &rarr;
                    {` ${transferFrom ? flight.flight.legs[0].segments[1].arrivalCity.caption 
                        : flight.flight.legs[0].segments[0].arrivalCity.caption}, 
                    ${transferFrom ? flight.flight.legs[0].segments[1].arrivalAirport.caption
                    : flight.flight.legs[0].segments[0].arrivalAirport.caption} 
                    (${transferFrom ? flight.flight.legs[0].segments[1].arrivalAirport.uid
                    : flight.flight.legs[0].segments[0].arrivalAirport.uid})`}</div>
                <div className="ticket__time">
                    <span className="ticket__time-departure">Время вылета</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">Время прилета</span>
                </div>
                <p className={`ticket__change ${transferFrom ? '' : 'ticket__change_hidden'}`}>1 пересадка</p>
                <p className="ticket__carrier">Рейс выполняет: {flight.flight.legs[0].segments[0].airline.caption}</p>
            </div>
            <div className="ticket__body">
                <p className="ticket__direction">
                    {/*{`${flight.flight.legs[1].segments[0].departureCity.caption}, */}
                    {/*${flight.flight.legs[1].segments[0].departureAirport.caption} */}
                    {/*(${flight.flight.legs[1].segments[0].departureAirport.uid}) `}*/}
                    {/*&rarr;*/}
                    {/*{` ${transferBack ? flight.flight.legs[1].segments[1].arrivalCity.caption*/}
                    {/*    : flight.flight.legs[1].segments[0].arrivalCity.caption}, */}
                    {/*${transferBack ? flight.flight.legs[1].segments[1].arrivalAirport.caption*/}
                    {/*    : flight.flight.legs[1].segments[0].arrivalAirport.caption} */}
                    {/*(${transferBack ? flight.flight.legs[1].segments[1].arrivalAirport.uid*/}
                    {/*    : flight.flight.legs[1].segments[0].arrivalAirport.uid})`}*/}
                </p>
                <div className="ticket__time">
                    <span className="ticket__time-departure">Время вылета</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">Время прилета</span>
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