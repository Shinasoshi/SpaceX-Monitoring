const API_URL = 'https://api.spacexdata.com/v4/launches';

export const apiService = {
    fetchLaunches: async () => {
        try {
            const result = await fetch(API_URL);
            return await result.json();
        } catch (e) {
            console.error(`There was an error during data fetch: `, e);
        }
    }
};
