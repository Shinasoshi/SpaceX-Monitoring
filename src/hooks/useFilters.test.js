import {renderHook} from "@testing-library/react";
import {useFilters} from "./useFilters";

describe('useFilters', () => {
    test('Should return correct filters and filter setter', () => {
        const {result} = renderHook(() => useFilters());

        expect(result.current.filters).toEqual({
            global: {value: null, matchMode: 'contains'},
            name: {value: null, matchMode: 'contains'},
            date: {value: null, matchMode: 'dateIs'},
            status: {value: null, matchMode: 'equals'},
            details: {value: null, matchMode: 'contains'}
        });
        expect(result.current.globalFilterValue).toEqual('');
        expect(typeof result.current.onGlobalFilterChange).toBe("function");
    })
})
