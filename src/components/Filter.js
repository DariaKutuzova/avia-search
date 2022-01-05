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
        console.log(newState);
        setCheckedTransfer(newState);
        onCheckboxTransfer(newState)
    }

    function changeCheckboxAirlines(e) {
        let newState = {
            ...checkedAirlines,
            [e.target.name]: e.target.checked
        };
        console.log(newState);
        setCheckedAirlines(newState);
        onCheckboxAirline({
            filterLot: checkedAirlines.filterLot,
            filterAeroflot: checkedAirlines.filterAeroflot
        })
    }

    // function handleSubmit() {
    //     onCheckboxTransfer({
    //         filterOneTransfer: checkedTransfer,
    //         filterNoTransfer: checkedNoTransfer
    //     })
    //     onFilterPrice({
    //         filterFrom: inputValues.filterFrom,
    //         filterTo: inputValues.filterTo,
    //     });
    //     onCheckboxAirline({
    //         filterLot: checkedAirlines.filterLot,
    //         filterAeroflot: checkedAirlines.filterAeroflot
    //     })
    // }


    function checkInputValue(e) {
        let newState = {
            ...inputValues,
            [e.target.name]: e.target.value
        };
        console.log(newState);
        setInputValues(newState);
        onFilterPrice({
            filterFrom: inputValues.filterFrom,
            filterTo: inputValues.filterTo,
        });
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
                               // onClick={handleSubmit}
                        />
                        <label htmlFor="one-transfer"
                               className="filter__list-label">- 1 пересадка</label>
                    </li>
                    <li className="filter__list-element">
                        <input type="checkbox" id="no-transfer"
                               name="filterNoTransfer"
                            // value={checkedNoTransfer}
                               className="filter__list-button"
                               checked={checkedTransfer.filterNoTransfer}
                               onChange={changeCheckboxTransfer}
                               // onClick={handleSubmit}
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
                            // value={inputValues.filterFrom}
                               className="filter__list-input"
                               placeholder="0"
                               maxLength="7"
                               onChange={checkInputValue}
                               // onClick={handleSubmit}
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
                               // onClick={handleSubmit}
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
                            // value={checkedAirlines.filter_lot}
                               className="filter__list-button"
                               checked={checkedAirlines.filterLot}
                               onChange={changeCheckboxAirlines}
                               // onClick={handleSubmit}
                        />
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
                               // onClick={handleSubmit}
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