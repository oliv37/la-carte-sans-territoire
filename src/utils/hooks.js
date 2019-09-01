import {useEffect, useCallback} from 'react';

export function useInitMapHandlersEffect(setMapIdSelected) {
    useEffect(() => {
      document.querySelectorAll(".area").forEach(el => {
        const mapId = el.classList[1].replace('departement', '');
        
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
        const el = document.querySelector(`.departement${mapIdSelected}`);
        el.classList.add('selected');
  
        return () => el.classList.remove('selected');
      }
    }, [mapIdSelected]);
  }
  
export function useHandleValidateClick(mapIdSelected, choiceIdSelected, idsValidated, setIdsValidated) {
    return useCallback(
      function handleValidateClick() {
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
            id => document.querySelector(`.departement${id}`).classList.add('disabled')
        );
    }, [idsValidated, setChoiceIdSelected, setMapIdSelected]);
  }
