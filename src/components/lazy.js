import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Error from './Error';

const lazy = mapDataModuleToProps => Component => ({lazyDataModule, ...otherProps}) => {
    const [dataModule, setDataModule] = useState(undefined);

    useEffect(() => {
        setDataModule(undefined);

        lazyDataModule()
            .then(dataModule => setDataModule(dataModule))
            .catch(err => setDataModule(false));

    }, [lazyDataModule]);

    if (dataModule === undefined) {
        return <Loading/>;
    }

    if (dataModule === false) {
        return <Error/>;
    }

    return (
        <Component 
            {...mapDataModuleToProps(dataModule)}
            {...otherProps}
        />
    );
}

export default lazy;
