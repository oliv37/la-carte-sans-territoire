import {MAP} from "../constants/gameType";
import * as images from "../res/map";

function createMapData(id, routePath, title, description, source) {
    return {
        id,
        routePath,
        title,
		description,
		source,
        type: MAP,
        lazyDataModule: () => import(`./map/${id}.js`),
        image: images[id]
    };
}

const frDpt = createMapData(
    "frDpt",
    "/france-departement",
    "Départements français",
	"Carte des départements français",
	"https://fr.wikipedia.org/wiki/Fichier:D%C3%A9partements_de_France-simple.svg"
);

const frReg = createMapData(
    "frReg",
    "/france-region",
    "Régions françaises",
	"Carte des régions françaises",
	"https://commons.wikimedia.org/wiki/File:Fond_de_carte_des_13_nouvelles_r%C3%A9gions_de_France_m%C3%A9tropolitaine.svg"
);

const usState= createMapData(
    "usState",
    "/usa-etats",
    "États des États-Unis",
	"Carte des états des États-Unis",
	"https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg"
);

const parisArr = createMapData(
    "parisArr",
    "/paris-arrondissement",
    "Arrondissements de Paris",
	"Carte des arrondissements de Paris",
	"https://fr.wikipedia.org/wiki/Fichier:Paris_blank_map.svg"
);

const africa = createMapData(
    "africa",
    "/afrique-continent",
    "Afrique",
	"Carte de l'Afrique",
	"https://commons.wikimedia.org/wiki/File:Blank_Map-Africa.svg"
);

const appData = [frDpt, frReg, usState, parisArr, africa];

export default appData;
