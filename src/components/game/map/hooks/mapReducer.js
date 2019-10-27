// TODO : utiliser le type des actions

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
		case 'update_id_hightlighted':
			return {
				...state,
				idHighlighted: action.payload
			};
		case 'update_map_id_selected': 
			return {
				...state,
				mapIdSelected: action.payload
			};
		case 'update_choice_id_selected':
			return {
				...state,
				choiceIdSelected: action.payload
			};
		case 'update_ids_validated':
			return {
				...state,
				idsValidated: action.payload
			};
		case 'update_has_error':
			return {
				...state,
				hasError: action.payload
			};
		case 'reset_ids_selected':
			return {
				...state,
				mapIdSelected: "",
				choiceIdSelected: ""
			};
		case 'reset':
			return init(action.payload);
		default:
			return state;
	}
}
