import Sort from './Sort'
import Filter from './Filter'

function Sidebar({onSort, onCheckboxTransfer, onFilterPrice, onCheckboxAirline}) {

    return (
        <div className="sidebar">
            <Sort
                onSort={onSort}
            />
            <Filter
                onCheckboxTransfer={onCheckboxTransfer}
                onFilterPrice={onFilterPrice}
                onCheckboxAirline={onCheckboxAirline}/>
        </div>
    );
}

export default Sidebar;