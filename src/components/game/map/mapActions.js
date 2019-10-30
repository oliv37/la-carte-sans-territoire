export const UPDATE_ID_HIGHTLIGHTED = "update_id_highlighted";
export const UPDATE_MAP_ID_SELECTED = "update_map_id_selected";
export const UPDATE_CHOICE_ID_SELECTED = "update_choice_id_selected";
export const UPDATE_IDS_VALIDATED = "update_ids_validated";
export const UPDATE_HAS_ERROR = "update_has_error";
export const RESET_IDS_SELECTED = "reset_ids_selected";
export const RESET = "reset";

export function updateIdHighlighted(idHighlighted) {
	return {
		type: UPDATE_ID_HIGHTLIGHTED,
		payload: idHighlighted
	};
}

export function updateMapIdSelected(mapIdSelected) {
	return {
		type: UPDATE_MAP_ID_SELECTED,
		payload: mapIdSelected
	};
}

export function updateChoiceIdSelected(choiceIdSelected) {
	return {
		type: UPDATE_CHOICE_ID_SELECTED,
		payload: choiceIdSelected
	};
}

export function updateIdsValidated(idsValidated) {
	return {
		type: UPDATE_IDS_VALIDATED,
		payload: idsValidated
	};
}

export function updateHasError(hasError) {
	return {
		type: UPDATE_HAS_ERROR,
		payload: hasError
	};
}

export function resetIdsSelected() {
	return {
		type: RESET_IDS_SELECTED,
	};
}

export function reset(id) {
	return {
		type: RESET,
		payload: id
	};
}
