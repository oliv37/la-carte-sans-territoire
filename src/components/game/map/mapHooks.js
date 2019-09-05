import {useState, useEffect, useCallback} from 'react';
import localStorage from "../../../utils/localStorage";

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

export function useInitMapHandlersEffect(id, setMapIdSelected) {
    useEffect(() => {
      const areas = document.querySelectorAll("[data-id]");
      Array.from(areas).forEach(el => {
        const mapId = el.dataset.id;
        
        el.addEventListener('click', e => {
          if (e.target.classList.contains('disabled')) {
            return;
          }
          
          setMapIdSelected(mapId);
        });
      });
    }, [id, setMapIdSelected]);
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
        el.classList.add('selected');
  
        return () => el && el.classList.remove('selected');
      }
    }, [mapIdSelected]);
}

export function useIdsValidatedEffect(idsValidated, setChoiceIdSelected, setMapIdSelected) {
  useEffect(() => {
      setChoiceIdSelected("");
      setMapIdSelected("");

      if (Array.isArray(idsValidated) && idsValidated.length) {
        idsValidated.forEach(
          id => document.querySelector(`[data-id="${id}"]`).classList.add('disabled')
        );
      } else {
        Array.from(document.querySelectorAll('[data-id]')).forEach(
          el => el.classList.remove('disabled')
        );
      }

  }, [idsValidated, setChoiceIdSelected, setMapIdSelected]);
}
  
export function useValidateClickCallback(
  id, mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated
) {
    return useCallback(
      function handleValidateClick() {
        if (mapIdSelected && mapIdSelected === choiceIdSelected) {
          const newIdsValidated = [...idsValidated, choiceIdSelected];
          
          setIdsValidated(newIdsValidated);
          localStorage.setItem(id, JSON.stringify(newIdsValidated));
        }
      }, [id, mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated]
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
  const [idsValidated, setIdsValidated] = useState(() => getIdsValidatedFromLocalStorage(id));

  useInitMapHandlersEffect(id, setMapIdSelected);
  useInitIdsSelectedEffect(id, setChoiceIdSelected, setMapIdSelected);
  useInitIdsValidatedEffect(id, setIdsValidated);
  useMapIdSelectedEffect(mapIdSelected);
  useIdsValidatedEffect(idsValidated, setChoiceIdSelected, setMapIdSelected);
  const handleValidateClick = useValidateClickCallback(
    id, mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated
  );
  const handleResetClick = useResetClickCallback(id, setIdsValidated);

  return {
    choiceIdSelected,
    mapIdSelected,
    idsValidated,
    setChoiceIdSelected,
    handleValidateClick,
    handleResetClick
  };
}