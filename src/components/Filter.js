import {useState} from 'react';

function Filter({onCheckboxTransfer, onFilterPrice, onCheckboxAirline}) {

    const [checkedTransfer, setCheckedTransfer] = useState({filterOneTransfer: false, filterNoTransfer: false});
    const [inputValues, setInputValues] = useState({filterFrom: '', filterTo: ''});
    const [checkedAirlines, setCheckedAirlines] = useState({filterLot: false, filterAeroflot: false});

    function changeCheckboxTransfer(e) {
        let newState = {
            ...checkedTransfer,
            [e.target.name]: e.target.checked
        };
        setCheckedTransfer(newState);
        onCheckboxTransfer(newState)
    }

    function changeCheckboxAirlines(e) {
        let newState = {
            ...checkedAirlines,
            [e.target.name]: e.target.checked
        };
        setCheckedAirlines(newState);
        onCheckboxAirline(newState)
    }

    function checkInputValue(e) {
        let newState = {
            ...inputValues,
            [e.target.name]: e.target.value
        };
        setInputValues(newState);
        onFilterPrice(newState);
    }

    return (
        <form className="filter">
            <div className="filter__change">
                <h2 className="filter__header">Фильтровать</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="one-transfer"
                               name="filterOneTransfer" value={checkedTransfer}
                               className="filter__list-button"
                               checked={checkedTransfer.filterOneTransfer}
                               onChange={changeCheckboxTransfer}
                        />
                        <label htmlFor="one-transfer"
                               className="filter__list-label">- 1 пересадка</label>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="no-transfer"
                               name="filterNoTransfer"
                               className="filter__list-button"
                               checked={checkedTransfer.filterNoTransfer}
                               onChange={changeCheckboxTransfer}
                        />
                        <label htmlFor="no-transfer"
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
                               name="filterFrom"
                               className="filter__list-input"
                               placeholder="0"
                               maxLength="7"
                               onChange={checkInputValue}
                        />
                    </li>
                    <li className="filter__list-element">
                        <label htmlFor="descending"
                               className="filter__list-label">До </label>
                        <input type="number" id="to"
                               name="filterTo" value={inputValues.filterTo}
                               className="filter__list-input"
                               placeholder="10000"
                               maxLength="7"
                               onChange={checkInputValue}
                        />
                    </li>
                </ul>
            </div>
            <div className="filter__transfer">
                <h2 className="filter__header">Авиакомпании</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="lot"
                               name="filterLot"
                               className="filter__list-button"
                               checked={checkedAirlines.filterLot}
                               onChange={changeCheckboxAirlines}
                        />
                        <label htmlFor="lot"
                               className="filter__list-label filter__list-avia">- LOT Polish Airlines
                        </label>
                        <p className="filter__list-from">
                            от 21049 р.
                        </p>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="aeroflot"
                               name="filterAeroflot"
                               className="filter__list-button"
                               checked={checkedAirlines.filterAeroflot}
                               onChange={changeCheckboxAirlines}
                        />
                        <label htmlFor="aeroflot"
                               className="filter__list-label filter__list-avia">- Аэрофлот - российские авиалинии
                        </label>
                        <p className="filter__list-from">
                            от 31733 р.
                        </p>
                    </li>
                </ul>
            </div>
        </form>
    );
}

export default Filter;