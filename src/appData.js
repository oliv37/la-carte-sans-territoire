import {MAP} from "./constants/gameType";

function createMapData(id, routePath, title, description) {
    return {
        id,
        routePath,
        title,
        description,
        type: MAP,
        lazyDataModule: () => import(`./data/${id}.js`),
    };
}

const frDpt = createMapData(
    "frDpt",
    "/french-district",
    "Départements français",
    "Carte des départements français"
);

const usState= createMapData(
    "usState",
    "/us-state",
    "États des États-Unis",
    "Carte des états des États-Unis"
);

const parisArr = createMapData(
    "parisArr",
    "/paris-district",
    "Arrondissements de Paris",
    "Carte des arrondissements de Paris"
);

const appData = [frDpt, usState, parisArr];

export default appData;
