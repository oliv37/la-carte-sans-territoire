import {useEffect, useCallback, useRef, useReducer} from 'react';
import {reducer, init} from "./mapReducer";
import {resetFocus} from "./mapUtils";
import styles from './MapGame.module.css';
import {
	updateIdHighlighted,
	updateMapIdSelected,
	updateChoiceIdSelected,
	updateIdsValidated,
	updateHasError,
	resetIdsSelected,
	reset,
} from "./mapActions";

const highlightTimeout = 1500;
const errorTimeout = 1500;

export function useResetStateEffect(id, dispatch) {
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
			return;
		}

		dispatch(reset());
	}, [id, dispatch]);
}

export function useInitMapHandlersEffect(id, dispatch) {
    useEffect(() => {
    	const areas = document.querySelectorAll("[data-id]");
    	Array.from(areas).forEach(el => {
    		const dataId = el.dataset.id;
        
    		el.addEventListener('click', () => {
    			if (el.classList.contains(styles.disabled)) {
					dispatch(updateIdHighlighted(dataId));
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
				() => dispatch(updateIdHighlighted("")), 
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
		dispatch(resetIdsSelected());
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
			dispatch(updateHasError(!isValid));
		 
			if (isValid) {
				const newIdsValidated = [...idsValidated, choiceIdSelected];
			
				dispatch(updateIdsValidated(newIdsValidated));
				localStorage.setItem(id, JSON.stringify(newIdsValidated));
		  	} else {
				timeoutIdErrorRef.current = setTimeout(
					() => dispatch(updateHasError(false)), 
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
				dispatch(updateIdsValidated([]));
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
		mapIdSelected => dispatch(updateMapIdSelected(mapIdSelected)),
		[]
	);

	const setChoiceIdSelected = useCallback(
		choiceIdSelected => dispatch(updateChoiceIdSelected(choiceIdSelected)),
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
