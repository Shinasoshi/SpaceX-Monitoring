import {Calendar} from "primereact/calendar";
import {Dropdown} from "primereact/dropdown";
import {formatDate} from "../utils";

const dateFilterTemplate = (options) => (
    <Calendar
        value={options.value}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        dateFormat="mm/dd/yy"
        placeholder="Date"
        mask="99/99/9999"
        style={{minWidth: '6rem'}}
    />
)

const dateBodyTemplate = (rowData) => formatDate(rowData.date);

const imageBodyTemplate = (rowData) => (
    <img alt={''}
        src={rowData.image}
        onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        width={80}
        style={{verticalAlign: 'middle'}}/>
);

const statusBodyTemplate = (status) => (
    <span className={`launch-badge status-${status}`}>
        {status.toUpperCase()}
    </span>
);

const statusFilterTemplate = (options) => (
    <Dropdown
        value={options.value}
        options={['success', 'failed', 'upcoming']}
        onChange={(e) => options.filterApplyCallback(e.value, options.index)}
        itemTemplate={statusBodyTemplate}
        placeholder="Status"
        className="p-column-filter"
        showClear
    />
)

export {
    dateFilterTemplate,
    dateBodyTemplate,
    imageBodyTemplate,
    statusBodyTemplate,
    statusFilterTemplate
}
