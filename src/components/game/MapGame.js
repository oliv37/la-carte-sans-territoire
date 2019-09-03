import React, {useState} from 'react';
import Choices from '../Choices';
import SuccessMessage from '../SuccessMessage';
import Button from '../Button';
import defaultOptions from './defaultOptions';
import {
    useInitIdsValidatedEffect,
    useInitMapHandlersEffect,
    useMapSelectionEffect,
    useHandleValidateClick,
    useValidatationEffect,
    useUpdateLocalStorageEffect
  } from '../../utils/hooks';
import lazy from '../lazy';

function MapGame({id, data, MapComponent, options}) {
  const {getChoiceLabel} = Object.assign({}, defaultOptions, options);

  const [choiceIdSelected, setChoiceIdSelected] = useState("");
  const [mapIdSelected, setMapIdSelected] = useState("");
  const [idsValidated, setIdsValidated] = useState([]);

  // Effects
  useInitMapHandlersEffect(setMapIdSelected);
  useInitIdsValidatedEffect(id, setIdsValidated);
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
  useUpdateLocalStorageEffect(id, idsValidated);

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

const mapDataModuleToProps = ({data, MapComponent, options}) => ({
  key: JSON.stringify(data), // recreate the component when the dataModule changes
  data,
  MapComponent,
  options
});

export default lazy(mapDataModuleToProps)(MapGame);
