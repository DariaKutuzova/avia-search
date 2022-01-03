import Sidebar from "./Sidebar";
import Ticket from "./Ticket";

function Main({flights}) {

    return (
        <main>
            <section aria-label="Билеты" className="main page__item">
                <Sidebar/>
                <div className="tickets">
                {flights.map((flight) => (
                        <Ticket flight={flight}
                              key={flight.flightToken}/>
                    )
                )}
                </div>
            </section>
        </main>
    );
}

export default Main;