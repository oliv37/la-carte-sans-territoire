import React, {useState, useEffect} from 'react';
import MapGame from './MapGame';
import Loading from '../Loading';
import Error from '../Error';

function LazyMapGame({lazyData, ...otherProps}) {
    const [gameProps, setGameProps] = useState(undefined);

    useEffect(() => {
        setGameProps(undefined);

        lazyData()
            .then(dataModule => {
                setGameProps({
                    data: dataModule.default,
                    mapComponent: dataModule.MapComponent
                });
            })
            .catch(err => setGameProps(false));

    }, [lazyData]);

    if (gameProps === undefined) {
        return <Loading/>;
    }

    if (gameProps === false) {
        return <Error/>;
    }

    const {data, mapComponent} = gameProps;
    const key = JSON.stringify(data);

    return (
        <MapGame 
            key={key} 
            data={data} 
            mapComponent={mapComponent} 
            {...otherProps}
        />
    );
}

export default LazyMapGame;
