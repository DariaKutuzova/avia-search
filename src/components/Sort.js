import {useState} from 'react';

function Sort({onSort}) {

    const [sort, setSort] = useState('ascending');

    function changeValue(e) {
        if (e.target.checked) {
            setSort(e.target.value);
            onSort(e.target.value);
        }
    }

    return (
        <form className="sort">
            <h2 className="sort__header">Сортировать</h2>
            <ul className="sort__list">
                <li className="sort__list-element">
                    <input type="radio" id="ascending"
                           name="sort" value="ascending"
                           className="sort__list-button"
                           checked={sort == 'ascending'}
                           onChange={changeValue}
                           />
                    <label htmlFor="ascending"
                           className="sort__list-label">- по возрастанию цены</label>
                </li>
                <li className="sort__list-element">
                    <input type="radio" id="descending"
                           name="sort" value="descending"
                           className="sort__list-button"
                           checked={sort == 'descending'}
                           onChange={changeValue}
                    />
                    <label htmlFor="descending"
                           className="sort__list-label">- по убыванию цены</label>
                </li>
                <li className="sort__list-element">
                    <input type="radio" id="time"
                           name="sort" value="time"
                           className="sort__list-button"
                           checked={sort == 'time'}
                           onChange={changeValue}
                    />
                    <label htmlFor="time"
                           className="sort__list-label">- по времени в пути</label>
                </li>
            </ul>
        </form>
    );
}

export default Sort;