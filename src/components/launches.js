import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {useNavigate} from "react-router-dom";
import {useFilters} from "../hooks/useFilters";
import {useFetchLaunches} from "../hooks/useFetchLaunches";
import {
    dateBodyTemplate,
    dateFilterTemplate,
    imageBodyTemplate,
    statusBodyTemplate,
    statusFilterTemplate
} from "./templates";

import './launches.scss';

const Launches = () => {
    const {loading, launches} = useFetchLaunches();
    const {filters, globalFilterValue, onGlobalFilterChange} = useFilters();
    const navigate = useNavigate();

    const header = () => (
        <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="my-2"> SpaceX Monitoring</h5>
            <span className="p-input-icon-left my-2">
                <i className="pi pi-search"/>
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search"/>
            </span>
        </div>
    );

    return (
        <div className="datatable m-4">
            <div className="card">
                <DataTable
                    header={header}
                    value={launches}
                    className="p-datatable-launches"
                    dataKey="id"
                    rowHover
                    filters={filters}
                    filterDisplay="row"
                    loading={loading}
                    responsiveLayout="scroll"
                    globalFilterFields={['name', 'date', 'details', 'status']}
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginator
                    rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]}
                    onRowClick={event => navigate(`${event.data.id}`)}
                    emptyMessage="No launches found."
                >
                    <Column
                        field="image"
                        body={imageBodyTemplate}
                        style={{width: '4rem'}}
                        showFilterMenu={false}
                        showClearButton={false}
                    />
                    <Column
                        field="name"
                        header="Name"
                        filterPlaceholder="Name"
                        filterField="name"
                        sortable
                        filter
                        showFilterMenu={false}
                        showClearButton={false}
                    />
                    <Column
                        field="date"
                        header="Date"
                        filterField="date"
                        dataType="date"
                        sortable
                        filter
                        filterElement={dateFilterTemplate}
                        body={dateBodyTemplate}
                        showFilterMenu={false}
                    />
                    <Column
                        field="status"
                        header="Status"
                        sortable
                        filter
                        filterElement={statusFilterTemplate}
                        body={(rowData) => statusBodyTemplate(rowData.status)}
                        showClearButton={false}
                        showFilterMenu={false}
                    />
                    <Column
                        field="details"
                        header="Details"
                        filterPlaceholder="Details"
                        sortable
                        filter
                        showFilterMenu={false}
                        showClearButton={false}
                    />
                </DataTable>
            </div>
        </div>
    );
}

export default Launches;
