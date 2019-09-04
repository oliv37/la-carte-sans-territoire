import {MAP} from "./constants/type.constants";

function createMapData(id, routePath, description) {
    return {
        id,
        routePath,
        description,
        type: MAP,
        lazyDataModule: () => import(`./data/${id}.js`),
    };
}

const appData = [
    createMapData("frDpt", "/french-district", "Carte des départements français"),
    createMapData("usState", "/us-state", "Carte des états des États-Unis")
];

export default appData;
