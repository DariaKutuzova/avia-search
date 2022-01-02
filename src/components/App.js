import '../App.css';
import Ticket from "./Ticket";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="page">
      <header className="header page__item"/>

      <main className="main page__item">
          <Sidebar/>
          <Ticket/>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
