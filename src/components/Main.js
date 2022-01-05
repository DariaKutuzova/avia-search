import Sidebar from "./Sidebar";
import Ticket from "./Ticket";

function Main({flights, onSort}) {

    return (
        <main>
            <section aria-label="Билеты" className="main page__item">
                <Sidebar
                onSort={onSort}/>
                <div className="tickets">
                {flights.map((flight) => (
                        <Ticket flight={flight}
                              key={flight.flightToken}/>
                    )
                )}
                    <button className="tickets__more-button">Показать еще</button>
                </div>
            </section>
        </main>
    );
}

export default Main;