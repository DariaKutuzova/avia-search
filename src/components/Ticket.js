function Ticket() {

    return (
        <div className="ticket">
            <div className="ticket__header">
                <img src="#" alt= "Логотип авиакомпании" className="ticket__header-logo"/>
                <div className="ticket__header-price">
                    <span className="ticket__header-price-value">21149 &#x20bd;</span>
                    <span className="ticket__header-description">Стоимость для одного взрослого пассажира</span>
                </div>
            </div>
            <div className="ticket__body">
                <p className="ticket__direction">Город-аэропорт</p>
                <div className="ticket__time">
                    <span className="ticket__time-departure">Время вылета</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">Время прилета</span>
                </div>
                <p className="ticket__change">1 пересадка</p>
                <p className="ticket__carrier">кто выполняет рейс</p>
            </div>
            <div className="ticket__body">
                <p className="ticket__direction">Город-аэропорт</p>
                <div className="ticket__time">
                    <span className="ticket__time-departure">Время вылета</span>
                    <span className="ticket__time-general">Общее время в пути</span>
                    <span className="ticket__time-arrival">Время прилета</span>
                </div>
                <p className="ticket__change">1 пересадка</p>
                <p className="ticket__carrier">кто выполняет рейс</p>
            </div>
            <button className="ticket__button">Выбрать</button>

        </div>
    );
}

export default Ticket;