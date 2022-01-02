function Sort() {

    return (
        <div className="sort">
            <h2 className="sort__header">Сортировать</h2>
            <ul className="sort__list">
                <li className="sort__list-element">
                    <input type="radio" id="ascending"
                           name="sort" value="ascending"
                           className="sort__list-button"/>
                    <label htmlFor="ascending"
                           className="sort__list-label">- по возрастанию цены</label>
                </li>
                <li className="sort__list-element">
                    <input type="radio" id="descending"
                           name="sort" value="descending"
                           className="sort__list-button"/>
                    <label htmlFor="descending"
                           className="sort__list-label">- по убыванию цены</label>
                </li>
                <li className="sort__list-element">
                    <input type="radio" id="time"
                           name="sort" value="time"
                           className="sort__list-button"/>
                    <label htmlFor="time"
                           className="sort__list-label">- по времени в пути</label>
                </li>
            </ul>
        </div>
    );
}

export default Sort;