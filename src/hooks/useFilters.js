import {useEffect, useState} from "react";
import {FilterMatchMode} from "primereact/api";

export const useFilters = () => {
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const onGlobalFilterChange = ({target: {value}}) => {
        let _filters = {...filters};
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    useEffect(() => {
        setFilters({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'name': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'date': {value: null, matchMode: FilterMatchMode.DATE_IS},
            'status': {value: null, matchMode: FilterMatchMode.EQUALS},
            'details': {value: null, matchMode: FilterMatchMode.CONTAINS}
        });
    }, [])

    return {
        filters,
        globalFilterValue,
        onGlobalFilterChange
    }
}
