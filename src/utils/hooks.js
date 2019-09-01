import {useEffect, useCallback} from 'react';

export function useInitMapHandlersEffect(setMapIdSelected) {
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
    }, [setMapIdSelected]);
  }
  
export function useMapSelectionEffect(mapIdSelected) {
    useEffect(() => {
      if (mapIdSelected) {
        const el = document.querySelector(`[data-id="${mapIdSelected}"`);
        el.classList.add('selected');
  
        return () => el.classList.remove('selected');
      }
    }, [mapIdSelected]);
  }
  
export function useHandleValidateClick(mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated) {
    return useCallback(
      function handleValidateClick() {
        console.log(mapIdSelected);
        console.log(choiceIdSelected);
        if (mapIdSelected && mapIdSelected === choiceIdSelected) {
          setIdsValidated([...idsValidated, choiceIdSelected]);
        }
      }, [mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated]);
  }
  
export function useValidatationEffect(idsValidated, setChoiceIdSelected, setMapIdSelected) {
    useEffect(() => {
        setChoiceIdSelected("");
        setMapIdSelected("");
        idsValidated.forEach(
            id => document.querySelector(`[data-id="${id}"]`).classList.add('disabled')
        );
    }, [idsValidated, setChoiceIdSelected, setMapIdSelected]);
  }
