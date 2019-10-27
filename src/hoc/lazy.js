import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Error from '../components/Error';

const defaultMapDataModuleToProps = dataModule => ({...dataModule});

const lazy = (mapDataModuleToProps = defaultMapDataModuleToProps) => Component => {
    function LazyComponent({lazyDataModule, ...otherProps}) {
        const [dataModule, setDataModule] = useState(undefined);

        useEffect(() => {
            setDataModule(undefined);

            lazyDataModule()
                .then(dataModule => setDataModule(dataModule))
                .catch(() => setDataModule(false));

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

    LazyComponent.propTypes = {
        lazyDataModule: PropTypes.func.isRequired
    };

    return LazyComponent;
}

export default lazy;
