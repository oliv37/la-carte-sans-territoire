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

const frReg = createMapData(
    "frReg",
    "/french-area",
    "Régions de France",
    "Carte des régions de France"
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

const africa = createMapData(
    "africa",
    "/afrique",
    "Afrique",
    "Carte de l'Afrique"
);

const appData = [frDpt, frReg, usState, parisArr, africa];

export default appData;
