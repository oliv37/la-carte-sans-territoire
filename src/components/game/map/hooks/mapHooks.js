// TODO : utiliser les actions

import {useEffect, useCallback, useRef, useReducer} from 'react';
import {reducer, init} from "./mapReducer";
import styles from '../MapGame.module.css';

const highlightTimeout = 1500;
const errorTimeout = 1500;

// TODO : à externaliser dans un fichier mapUtils.js
function resetFocus() {
	const element = document.querySelector("input:not([disabled])[type='radio']");
	if (element) {
		element.focus();
		element.blur();
	}
}

export function useResetStateEffect(id, dispatch) {
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		dispatch({type: "reset", payload: id});
	}, [id, dispatch]);
}

export function useInitMapHandlersEffect(id, dispatch) {
    useEffect(() => {
    	const areas = document.querySelectorAll("[data-id]");
    	Array.from(areas).forEach(el => {
    		const dataId = el.dataset.id;
        
    		el.addEventListener('click', () => {
    			if (el.classList.contains(styles.disabled)) {
					dispatch({action: 'update_id_hightlighted', 'payload': dataId});
            		return;
        		}
          
          		document.querySelector(`label#item-${dataId}`).click();
			});
		});
	}, [id, dispatch]);
}

export function useMapIdSelectedEffect(mapIdSelected) {
    useEffect(() => {
    	if (mapIdSelected) {
    		const el = document.querySelector(`[data-id="${mapIdSelected}"`);
    		el.classList.add(styles.selected);
  
    		return () => el && el.classList.remove(styles.selected);
    	}
	}, [mapIdSelected]);
}

export function useIdHightlightedEffect(idHightlighted, dispatch) {
	useEffect(() => {
		if (idHightlighted) {
			const el = document.querySelector(`[data-id='${idHightlighted}'`);
			el.classList.add(styles.highlight);
  
			const timeoutId = setTimeout(
				() => dispatch({type: 'update_id_hightlighted', payload: ""}), 
				highlightTimeout
			);
  
			return () => {
		  		clearTimeout(timeoutId);
				el.classList.remove(styles.highlight);
			};
		}

	}, [idHightlighted, dispatch]);
}

export function useIdsValidatedEffect(idsValidated, dispatch) {
	useEffect(() => {
		dispatch({type: 'reset_ids_selected'});
		resetFocus();
  
		if (Array.isArray(idsValidated) && idsValidated.length) {
			idsValidated.forEach(
				id => document.querySelector(`[data-id="${id}"]`).classList.add(styles.disabled)
		  	);
		} else {
			Array.from(document.querySelectorAll('[data-id]')).forEach(
				el => el.classList.remove(styles.disabled)
			);
		}
	}, [idsValidated, dispatch]);
}

export function useValidateClickCallback(id, state, dispatch) {
	const {mapIdSelected, choiceIdSelected, idsValidated} = state;
	const timeoutIdErrorRef = useRef(null);
  
	return useCallback(
		function handleValidateClick(e) {
			e.preventDefault();
  
			const isValid = mapIdSelected && mapIdSelected === choiceIdSelected;

			clearTimeout(timeoutIdErrorRef.current);
			dispatch({type: 'update_has_error', payload: !isValid});
		 
			if (isValid) {
				const newIdsValidated = [...idsValidated, choiceIdSelected];
			
				dispatch({type: 'update_ids_validated', payload: newIdsValidated});
				localStorage.setItem(id, JSON.stringify(newIdsValidated));
		  	} else {
				timeoutIdErrorRef.current = setTimeout(
					() => dispatch({type: 'update_has_error', payload: false}), 
					errorTimeout
				);
			}
		}, [id, mapIdSelected, choiceIdSelected, idsValidated, dispatch]
	);
}
  
export function useResetClickCallback(id, dispatch) {
	return useCallback(
		function handleResetClick() {
			if (window.confirm("Souhaitez-vous vraiment recommencer cette carte ?")) {
				dispatch({type: 'update_ids_validated', payload: []});
				localStorage.removeItem(id);
			}
		}, [id, dispatch]
	);
}

export function useMapGame(id) {
	const [state, dispatch] = useReducer(reducer, id, init);
	const {
		choiceIdSelected,
		mapIdSelected,
		idsValidated,
		idHighlighted,
		hasError,
	} = state;

	useInitMapHandlersEffect(id, dispatch);
	useMapIdSelectedEffect(mapIdSelected);
	useIdHightlightedEffect(idHighlighted, dispatch);
	useIdsValidatedEffect(idsValidated, dispatch);
	useResetStateEffect(id, dispatch);
	
	const handleValidateClick = useValidateClickCallback(id, state, dispatch);
	const handleResetClick = useResetClickCallback(id, dispatch);

	const setMapIdSelected = useCallback(
		mapIdSelected => dispatch({type: 'update_map_id_selected', payload: mapIdSelected}),
		[]
	);

	const setChoiceIdSelected = useCallback(
		choiceIdSelected => dispatch({type: 'update_choice_id_selected', payload: choiceIdSelected}),
		[]
	);
  
	return {
	  choiceIdSelected,
	  mapIdSelected,
	  idHighlighted,
	  idsValidated,
	  hasError,
	  setMapIdSelected,
	  setChoiceIdSelected,
	  handleValidateClick,
	  handleResetClick
	};
}
