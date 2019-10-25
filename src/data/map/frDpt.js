export {ReactComponent as MapComponent} from "../../res/map/frDpt.svg";

export const options = {
    getChoiceLabel(item) {
        let {id, label} = item;
    
        if (id.length === 1) {
			id = `0${id}`;
        }

        return `${id} ${label}`;
    }
};

export const data = [
	{"id": "29", "label": "Finistère"},
	{"id": "22", "label": "Côtes-d'Armor"},
    {"id": "1", "label": "Ain"},
    {"id": "2", "label": "Aisne"},
    {"id": "3", "label": "Allier"},
    {"id": "4", "label": "Alpes-de-Haute-Provence"},
    {"id": "5", "label": "Hautes-Alpes"},
    {"id": "6", "label": "Alpes-Maritimes"},
    {"id": "7", "label": "Ardèche"},
    {"id": "8", "label": "Ardennes"},
    {"id": "9", "label": "Ariège"},
    {"id": "10", "label": "Aube"},
    {"id": "11", "label": "Aude"},
    {"id": "12", "label": "Aveyron"},
    {"id": "13", "label": "Bouches-du-Rhône"},
    {"id": "14", "label": "Calvados"},
    {"id": "15", "label": "Cantal"},
    {"id": "16", "label": "Charente"},
    {"id": "17", "label": "Charente-maritime"},
    {"id": "18", "label": "Cher"},
    {"id": "19", "label": "Corrèze"},
    {"id": "2A", "label": "Corse-du-sud"},
    {"id": "2B", "label": "Haute-Corse"},
    {"id": "21", "label": "Côte-d'Or"},
    {"id": "23", "label": "Creuse"},
    {"id": "24", "label": "Dordogne"},
    {"id": "25", "label": "Doubs"},
    {"id": "26", "label": "Drôme"},
    {"id": "27", "label": "Eure"},
    {"id": "28", "label": "Eure-et-loir"},
    {"id": "30", "label": "Gard"},
    {"id": "31", "label": "Haute-garonne"},
    {"id": "32", "label": "Gers"},
    {"id": "33", "label": "Gironde"},
    {"id": "34", "label": "Hérault"},
    {"id": "35", "label": "Ille-et-vilaine"},
    {"id": "36", "label": "Indre"},
    {"id": "37", "label": "Indre-et-loire"},
    {"id": "38", "label": "Isère"},
    {"id": "39", "label": "Jura"},
    {"id": "40", "label": "Landes"},
    {"id": "41", "label": "Loir-et-cher"},
    {"id": "42", "label": "Loire"},
    {"id": "43", "label": "Haute-loire"},
    {"id": "44", "label": "Loire-atlantique"},
    {"id": "45", "label": "Loiret"},
    {"id": "46", "label": "Lot"},
    {"id": "47", "label": "Lot-et-garonne"},
    {"id": "48", "label": "Lozère"},
    {"id": "49", "label": "Maine-et-loire"},
    {"id": "50", "label": "Manche"},
    {"id": "51", "label": "Marne"},
    {"id": "52", "label": "Haute-marne"},
    {"id": "53", "label": "Mayenne"},
    {"id": "54", "label": "Meurthe-et-moselle"},
    {"id": "55", "label": "Meuse"},
    {"id": "56", "label": "Morbihan"},
    {"id": "57", "label": "Moselle"},
    {"id": "58", "label": "Nièvre"},
    {"id": "59", "label": "Nord"},
    {"id": "60", "label": "Oise"},
    {"id": "61", "label": "Orne"},
    {"id": "62", "label": "Pas-de-calais"},
    {"id": "63", "label": "Puy-de-dôme"},
    {"id": "64", "label": "Pyrénées-atlantiques"},
    {"id": "65", "label": "Hautes-Pyrénées"},
    {"id": "66", "label": "Pyrénées-orientales"},
    {"id": "67", "label": "Bas-rhin"},
    {"id": "68", "label": "Haut-rhin"},
    {"id": "69", "label": "Rhône"},
    {"id": "70", "label": "Haute-saône"},
    {"id": "71", "label": "Saône-et-loire"},
    {"id": "72", "label": "Sarthe"},
    {"id": "73", "label": "Savoie"},
    {"id": "74", "label": "Haute-savoie"},
    {"id": "75", "label": "Paris"},
    {"id": "76", "label": "Seine-maritime"},
    {"id": "77", "label": "Seine-et-marne"},
    {"id": "78", "label": "Yvelines"},
    {"id": "79", "label": "Deux-sèvres"},
    {"id": "80", "label": "Somme"},
    {"id": "81", "label": "Tarn"},
    {"id": "82", "label": "Tarn-et-garonne"},
    {"id": "83", "label": "Var"},
    {"id": "84", "label": "Vaucluse"},
    {"id": "85", "label": "Vendée"},
    {"id": "86", "label": "Vienne"},
    {"id": "87", "label": "Haute-vienne"},
    {"id": "88", "label": "Vosges"},
    {"id": "89", "label": "Yonne"},
    {"id": "90", "label": "Territoire de belfort"},
    {"id": "91", "label": "Essone"},
    {"id": "92", "label": "Hauts-de-seine"},
    {"id": "93", "label": "Seine-Saint-Denis"},
    {"id": "94", "label": "Val-de-marne"},
    {"id": "95", "label": "Val-d'oise"}
];

function idStrToNumber(idStr) {
	return Number(idStr.replace(/[AB]/, "0"));
}

export function compareList(item1, item2) {
	const id1 = idStrToNumber(item1.id);
	const id2 = idStrToNumber(item2.id);

	return id1 - id2;
}
