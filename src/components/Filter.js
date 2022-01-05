import {useState} from 'react';

function Filter({onCheckboxTransfer, onFilterPrice, onCheckboxAirline}) {

    const [checkedTransfer, setCheckedTransfer] = useState(false);
    const [checkedNoTransfer, setCheckedNoTransfer] = useState(false);
    const [inputValues, setInputValues] = useState({filterFrom: '', filterTo: ''});
    const [checkedAirlines, setCheckedAirlines] = useState({filterLot: false, filterAeroflot: false});

    function changeCheckboxTransfer() {
        setCheckedTransfer(!checkedTransfer);
    }

    function changeCheckboxNoTransfer() {
        setCheckedNoTransfer(!checkedNoTransfer);
    }

    function changeCheckboxAirlines(e) {
        let newState = {
            ...checkedAirlines,
            [e.target.name]: e.target.checked
        };
        console.log(newState);
        setCheckedAirlines(newState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onCheckboxTransfer({
            filterOneTransfer: checkedTransfer,
            filterNoTransfer: checkedNoTransfer
        })
        onFilterPrice({
            filterFrom: inputValues.filterFrom,
            filterTo: inputValues.filterTo,
        });
        onCheckboxAirline({
            filterLot: checkedAirlines.filterLot,
            filterAeroflot: checkedAirlines.filterAeroflot
        })
    }


    function checkInputValue(e) {
        let newState = {
            ...inputValues,
            [e.target.name]: e.target.value
        };
        console.log(newState);
        setInputValues(newState);
    }

    return (
        <form className="filter"
              onSubmit={handleSubmit}>
            <div className="filter__change">
                <h2 className="filter__header">Фильтровать</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="one-transfer"
                               name="filterOneTransfer" value="one-transfer"
                               className="filter__list-button"
                               checked={checkedTransfer}
                               onChange={changeCheckboxTransfer}/>
                        <label htmlFor="one-transfer"
                               className="filter__list-label">- 1 пересадка</label>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="no-transfer"
                               name="filterNoTransfer" value="no-transfer"
                               className="filter__list-button"
                               checked={checkedNoTransfer}
                               onChange={changeCheckboxNoTransfer}/>
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
                               name="filterFrom" value={inputValues.filterFrom}
                               className="filter__list-input"
                               placeholder="0"
                               maxLength="7"
                               onChange={checkInputValue}/>
                    </li>
                    <li className="filter__list-element">
                        <label htmlFor="descending"
                               className="filter__list-label">До </label>
                        <input type="number" id="to"
                               name="filterTo" value={inputValues.filterTo}
                               className="filter__list-input"
                               placeholder="10000"
                               maxLength="7"
                               onChange={checkInputValue}/>
                    </li>
                </ul>
            </div>
            <div className="filter__transfer">
                <h2 className="filter__header">Авиакомпании</h2>
                <ul className="filter__list">
                    <li className="filter__list-element">
                        <input type="checkbox" id="lot"
                               name="filterLot"
                               // value={checkedAirlines.filter_lot}
                               className="filter__list-button"
                               checked={checkedAirlines.filterLot}
                               onChange={changeCheckboxAirlines}/>
                        <label htmlFor="lot"
                               className="filter__list-label filter__list-avia">- LOT Polish Airlines
                        </label>
                        <p className="filter__list-from">
                            от 29999 р.
                        </p>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="aeroflot"
                               name="filterAeroflot"
                               // value={checkedAirlines.filter_aeroflot}
                               className="filter__list-button"
                               checked={checkedAirlines.filterAeroflot}
                               onChange={changeCheckboxAirlines}
                        />
                        <label htmlFor="aeroflot"
                               className="filter__list-label filter__list-avia">- Аэрофлот - российские авиалинии
                        </label>
                        <p className="filter__list-from">
                            от 29999 р.
                        </p>
                    </li>
                </ul>
            </div>
        </form>
    );
}

export default Filter;