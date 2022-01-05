import Sidebar from "./Sidebar";
import Ticket from "./Ticket";

function Main({flights, onSort, onCheckboxTransfer, onFilterPrice, onCheckboxAirline, onAddFlights}) {


    return (
        <main>
            <section aria-label="Билеты" className="main page__item">
                <Sidebar
                onSort={onSort}
                onCheckboxTransfer={onCheckboxTransfer}
                onFilterPrice={onFilterPrice}
                onCheckboxAirline={onCheckboxAirline}/>
                <div className="tickets">
                {flights.map((flight) => (
                        <Ticket flight={flight}
                              key={flight.flightToken}/>
                    )
                )}
                    <button className="tickets__more-button"
                    type='button'
                    onClick={onAddFlights}>Показать еще</button>
                </div>
            </section>
        </main>
    );
}

export default Main;