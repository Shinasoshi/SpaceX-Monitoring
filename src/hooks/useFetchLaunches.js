import {useEffect, useState} from "react";
import {apiService} from "../api/api-service";
import {getStatus} from "../utils";

export const useFetchLaunches = () => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const launchesData = await apiService.fetchLaunches();
            const normalizedLaunches = launchesData.map(({
                id,
                name,
                details,
                date_utc,
                upcoming,
                success,
                links
            }) => ({
                    id,
                    name,
                    details,
                    status: getStatus({upcoming, success}),
                    date: new Date(date_utc),
                    image: links.flickr.original[0]
                })
            )

            setLaunches(normalizedLaunches);
            setLoading(false);
        })()
    }, [])

    return {
        loading,
        launches
    }
}
