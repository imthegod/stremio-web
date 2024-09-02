const React = require('react');

const useFetchTodaysSchedule = () => {
    const [schedule, setSchedule] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const URL = 'https://animes-season-addon.vercel.app/catalog/series/schedule.json';
    React.useEffect(() => {
        setLoading(true);

        const fetchData = async() => {
            try {
                const response = await fetch(URL);
                const text = await response.json();
                setSchedule(text);
            }
            catch(error) {
                console.error(error);
                setError(error);
            }
            finally{
                setLoading(false);
            }

        };
        fetchData();

    }, []);

    return { schedule, loading, error };
};
module.exports = useFetchTodaysSchedule;
