import Sort from './Sort'
import Filter from './Filter'

function Sidebar({onSort}) {

    return (
        <div className="sidebar">
            <Sort
            onSort={onSort}/>
            <Filter/>
        </div>
    );
}

export default Sidebar;