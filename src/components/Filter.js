function Filter() {

    return (
        <div className="filter">
            <div className="filter__change">
                <h2 className="filter__header">Фильтровать</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="ascending"
                               name="filter" value="ascending"
                               className="filter__list-button"/>
                        <label htmlFor="ascending"
                               className="filter__list-label">- 1 пересадка</label>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="descending"
                               name="filter" value="descending"
                               className="filter__list-button"/>
                        <label htmlFor="descending"
                               className="filter__list-label">- без пересадок</label>
                    </li>
                </ul>
            </div>
            <div className="filter__price">
                <h2 className="filter__header">Цена</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <label htmlFor="descending"
                               className="filter__list-label">От </label>
                        <input type="number" id="from"
                               name="filter" value="from"
                               className="filter__list-input"
                               placeholder="0"/>
                    </li>
                    <li className="filter__list-element">
                        <label htmlFor="descending"
                               className="filter__list-label">До </label>
                        <input type="number" id="to"
                               name="filter" value="to"
                               className="filter__list-input"
                               placeholder="10000"/>
                    </li>
                </ul>
            </div>
            <div className="filter__transfer">
                <h2 className="filter__header">Авиакомпании</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="lot"
                               name="filter" value="lot"
                               className="filter__list-button"/>
                        <label htmlFor="lot"
                               className="filter__list-label filter__list-avia">- LOT Polish Airlines
                        </label>
                        <p className="filter__list-from">
                             от 29999 р.
                        </p>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="aeroflot"
                               name="filter" value="aeroflot"
                               className="filter__list-button"/>
                        <label htmlFor="aeroflot"
                               className="filter__list-label filter__list-avia">- Аэрофлот - российские авиалинии
                        </label>
                        <p className="filter__list-from">
                            от 29999 р.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;