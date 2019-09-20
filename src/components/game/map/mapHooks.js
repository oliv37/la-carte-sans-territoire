import {useState, useEffect, useCallback, useRef} from 'react';
import localStorage from "../../../utils/localStorage";
import styles from './MapGame.module.css';

const highlightTimeout = 1500;
const errorTimeout = 1500;

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

export function useInitMapHandlersEffect(id, setMapIdSelected, setIdHighlighted) {
    useEffect(() => {
      const areas = document.querySelectorAll("[data-id]");
      Array.from(areas).forEach(el => {
        const mapId = el.dataset.id;
        
        el.addEventListener('click', () => {
          
          if (el.classList.contains(styles.disabled)) {
            setIdHighlighted(mapId);
            return;
          }
          
          setMapIdSelected(mapId);
        });
      });
    }, [id, setMapIdSelected, setIdHighlighted]);
}

export function useInitIdsSelectedEffect(id, setChoiceIdSelected, setMapIdSelected) {
  useEffect(() => {
    setChoiceIdSelected("");
    setMapIdSelected("");
  }, [id, setChoiceIdSelected, setMapIdSelected]);
}

export function useInitIdsValidatedEffect(id, setIdsValidated) {
  useEffect(() => {
    setIdsValidated(getIdsValidatedFromLocalStorage(id));
  }, [id, setIdsValidated]);
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

export function useIdsValidatedEffect(idsValidated, setChoiceIdSelected, setMapIdSelected) {
  useEffect(() => {
      setChoiceIdSelected("");
      setMapIdSelected("");

      if (Array.isArray(idsValidated) && idsValidated.length) {
        idsValidated.forEach(
          id => document.querySelector(`[data-id="${id}"]`).classList.add(styles.disabled)
        );
      } else {
        Array.from(document.querySelectorAll('[data-id]')).forEach(
          el => el.classList.remove(styles.disabled)
        );
      }

  }, [idsValidated, setChoiceIdSelected, setMapIdSelected]);
}

export function useIdHightlightedEffect(idHightlighted, setIdHighlighted) {
  useEffect(() => {
    if (idHightlighted) {
      const el = document.querySelector(`[data-id='${idHightlighted}'`);
      el.classList.add(styles.highlight);

      const timeoutId = setTimeout(() => setIdHighlighted(""), highlightTimeout);

      return () => {
        clearTimeout(timeoutId);
        el.classList.remove(styles.highlight);
      };
    }
  }, [idHightlighted, setIdHighlighted]);
}
  
export function useValidateClickCallback(
  id, 
  mapIdSelected, 
  choiceIdSelected, 
  idsValidated, 
  setIdsValidated,
  setHasError
) {
    const timeoutIdRef = useRef(null);

    return useCallback(
      function handleValidateClick() {
        const isValid = mapIdSelected && mapIdSelected === choiceIdSelected;

        clearTimeout(timeoutIdRef.current);
        setHasError(!isValid);
        
        if (isValid) {
          const newIdsValidated = [...idsValidated, choiceIdSelected];
          
          setIdsValidated(newIdsValidated);
          localStorage.setItem(id, JSON.stringify(newIdsValidated));
        } else {
          timeoutIdRef.current = setTimeout(() => setHasError(false), errorTimeout);
        }
      }, [id, mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated, setHasError]
    );
}

export function useResetClickCallback(id, setIdsValidated) {
  return useCallback(
    function handleResetClick() {
      if (window.confirm("Souhaitez-vous vraiment recommencer cette carte ?")) {
        setIdsValidated([]);
        localStorage.removeItem(id);
      }
    }, [id, setIdsValidated]
  );
}

export function useMapGame(id) {
  const [choiceIdSelected, setChoiceIdSelected] = useState("");
  const [mapIdSelected, setMapIdSelected] = useState("");
  const [idHighlighted, setIdHighlighted] = useState("");
  const [idsValidated, setIdsValidated] = useState(() => getIdsValidatedFromLocalStorage(id));
  const [hasError, setHasError] = useState(false);

  useInitMapHandlersEffect(id, setMapIdSelected, setIdHighlighted);
  useInitIdsSelectedEffect(id, setChoiceIdSelected, setMapIdSelected);
  useInitIdsValidatedEffect(id, setIdsValidated);
  useMapIdSelectedEffect(mapIdSelected);
  useIdHightlightedEffect(idHighlighted, setIdHighlighted);
  useIdsValidatedEffect(idsValidated, setChoiceIdSelected, setMapIdSelected);
  const handleValidateClick = useValidateClickCallback(
    id, mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated, setHasError
  );
  const handleResetClick = useResetClickCallback(id, setIdsValidated);

  return {
    choiceIdSelected,
    mapIdSelected,
    idHighlighted,
    idsValidated,
    hasError,
    setChoiceIdSelected,
    handleValidateClick,
    handleResetClick
  };
}
