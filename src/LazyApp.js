import React, {useState, useEffect} from "react";
import App from "./App";

function LazyApp({lazyData, ...rest}) {
    const [appProps, setAppProps] = useState(undefined);

    useEffect(() => {
        setAppProps(undefined);

        lazyData()
            .then(dataModule => {
                setAppProps({
                    data: dataModule.default,
                    mapComponent: dataModule.MapComponent
                });
            })
            .catch(err => setAppProps(false));

    }, [lazyData]);

    if (appProps === undefined) {
        return "Loading";
    }

    if (appProps === false) {
        return "Error";
    }

    const {data, mapComponent} = appProps;
    const key = JSON.stringify(data);

    return <App key={key} data={data} mapComponent={mapComponent} {...rest}/>;
}

export default LazyApp;
