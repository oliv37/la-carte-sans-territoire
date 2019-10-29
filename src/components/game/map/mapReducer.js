import {
	UPDATE_ID_HIGHTLIGHTED,
	UPDATE_MAP_ID_SELECTED,
	UPDATE_CHOICE_ID_SELECTED,
	UPDATE_IDS_VALIDATED,
	UPDATE_HAS_ERROR,
	RESET_IDS_SELECTED,
	RESET,
} from "./mapActions";

function getIdsValidatedFromLocalStorage(id) {
	try {
		const itemValue = localStorage.getItem(id);
		const idsValidated = itemValue && JSON.parse(itemValue);
		if (Array.isArray(idsValidated)) {
		  return idsValidated;
		}
	} catch {}
  
	return [];
}

export function init(id) {
	const idsValidated = getIdsValidatedFromLocalStorage(id);

	return {
		choiceIdSelected: "",
		mapIdSelected: "",
		idsValidated,
		idHighlighted: "",
		hasError: false
	};
}

export function reducer(state, action) {
	switch(action.type) {
		case UPDATE_ID_HIGHTLIGHTED:
			return {
				...state,
				idHighlighted: action.payload
			};
		case UPDATE_MAP_ID_SELECTED:
			return {
				...state,
				mapIdSelected: action.payload
			};
		case UPDATE_CHOICE_ID_SELECTED:
			return {
				...state,
				choiceIdSelected: action.payload
			};
		case UPDATE_IDS_VALIDATED:
			return {
				...state,
				idsValidated: action.payload
			};
		case UPDATE_HAS_ERROR:
			return {
				...state,
				hasError: action.payload
			};
		case RESET_IDS_SELECTED:
			return {
				...state,
				mapIdSelected: "",
				choiceIdSelected: ""
			};
		case RESET:
			return init(action.payload);
		default:
			return state;
	}
}
