import React, {useState, useEffect} from 'react';
import MapGame from './MapGame';
import Loading from '../Loading';
import Error from '../Error';

function LazyMapGame({lazyData, ...otherProps}) {
    const [dataModule, setDataModule] = useState(undefined);

    useEffect(() => {
        setDataModule(undefined);

        lazyData()
            .then(dataModule => setDataModule(dataModule))
            .catch(err => setDataModule(false));

    }, [lazyData]);

    if (dataModule === undefined) {
        return <Loading/>;
    }

    if (dataModule === false) {
        return <Error/>;
    }

    return (
        <MapGame 
            key={JSON.stringify(dataModule.data)}
            {...dataModule}
            {...otherProps}
        />
    );
}

export default LazyMapGame;
