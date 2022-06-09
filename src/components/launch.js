import {useFetchLaunches} from "../hooks/useFetchLaunches";
import {NavLink, useParams} from "react-router-dom";
import {Button} from "primereact/button";

const Launch = () => {
    const params = useParams();
    const {launches} = useFetchLaunches();
    const launch = launches?.find(data => data.id === params.launchId);

    return (
        <div className="container">
            <NavLink to="/launches">
                <Button label="Back to list" icon="pi pi-angle-left" className="p-button-sm my-3"/>
            </NavLink>
            {launch ? (
                <div>
                    <h1>{launch.name}</h1>
                    <img alt={''}
                         src={launch.image}
                         onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                         width={640}
                         style={{verticalAlign: 'middle'}}/>

                    <p className="my-3">
                    <span className={`launch-badge status-${launch.status}`}>{launch.status.toUpperCase()}</span>
                        {launch.date.toLocaleString()}</p>
                    <p>{launch.details}</p>
                </div>
            ) : (
                <p>loading...</p>
            )}
        </div>
    )
}

export default Launch;
