import React, {useState} from 'react';
import Choices from '../Choices';
import FinishMessage from '../FinishMessage';
import Button from '../Button';
import {
    useInitMapHandlersEffect,
    useMapSelectionEffect,
    useHandleValidateClick,
    useValidatationEffect
  } from '../../utils/hooks';

function MapGame({data, mapComponent: MapComponent}) {
  const [choiceIdSelected, setChoiceIdSelected] = useState("");
  const [mapIdSelected, setMapIdSelected] = useState("");
  const [idsValidated, setIdsValidated] = useState([]);

  // Effects
  useInitMapHandlersEffect(setMapIdSelected);
  useMapSelectionEffect(mapIdSelected);
  const handleValidateClick = useHandleValidateClick(
    mapIdSelected, 
    choiceIdSelected, 
    idsValidated, 
    setIdsValidated
  );
  useValidatationEffect(
    idsValidated, 
    setChoiceIdSelected, 
    setMapIdSelected
  );

  const finished = idsValidated.length === data.length;
  const canValidate = mapIdSelected && choiceIdSelected;

  return (
    <div className="map-game-container">
        <main>
          <section>
            <MapComponent/>
          </section>
          <aside>
            <Choices 
              data={data} 
              onChange={setChoiceIdSelected}
              choiceIdSelected={choiceIdSelected}
              idsValidated={idsValidated}
            />
          </aside>
        </main>
        <footer>
          {finished ? <FinishMessage/> : (
            <Button onClick={handleValidateClick} disabled={!canValidate}>
              Valider
            </Button>  
          )}
        </footer>
    </div>
  );
}

export default MapGame;
