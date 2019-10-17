import {MAP} from "../constants/gameType";

function createMapData(id, routePath, title, description) {
    return {
        id,
        routePath,
        title,
        description,
        type: MAP,
        lazyDataModule: () => import(`./map/${id}.js`),
        imageModule: import(`../res/${id}.svg`) // TODO : mettre une simple url pour l'image
    };
}

const frDpt = createMapData(
    "frDpt",
    "/france-departement",
    "Départements français",
    "Carte des départements français"
);

const frReg = createMapData(
    "frReg",
    "/france-region",
    "Régions françaises",
    "Carte des régions françaises"
);

const usState= createMapData(
    "usState",
    "/usa-etats",
    "États des États-Unis",
    "Carte des états des États-Unis"
);

const parisArr = createMapData(
    "parisArr",
    "/paris-arrondissement",
    "Arrondissements de Paris",
    "Carte des arrondissements de Paris"
);

const africa = createMapData(
    "africa",
    "/afrique-continent",
    "Afrique",
    "Carte de l'Afrique"
);

const appData = [frDpt, frReg, usState, parisArr, africa];

export default appData;
