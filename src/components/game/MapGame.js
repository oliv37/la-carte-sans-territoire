import React, {useState} from 'react';
import Choices from '../Choices';
import SuccessMessage from '../SuccessMessage';
import Button from '../Button';
import defaultOptions from './defaultOptions';
import {
    useInitMapHandlersEffect,
    useMapSelectionEffect,
    useHandleValidateClick,
    useValidatationEffect
  } from '../../utils/hooks';

function MapGame({data, MapComponent, options}) {
  const {getChoiceLabel} = Object.assign({}, defaultOptions, options);

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
              getChoiceLabel={getChoiceLabel}
            />
          </aside>
        </main>
        <footer>
          {finished ? <SuccessMessage/> : (
            <Button 
              onClick={handleValidateClick} 
              disabled={!canValidate}
              children="Valider"
            />
          )}
        </footer>
    </div>
  );
}

export default MapGame;
