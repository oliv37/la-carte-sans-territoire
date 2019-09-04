import React from 'react';
import ListChoice from './ListChoice';
import SuccessMessage from './SuccessMessage';
import Button from '../../common/Button';
import ResetButton from './ResetButton';
import {useMapGame} from './mapHooks';
import lazy from '../../../hoc/lazy';

const defaultOptions = {
  getChoiceLabel: item => `${item.id} - ${item.label}`
};

function MapGame({id, data, MapComponent, options}) {
  const {getChoiceLabel} = Object.assign({}, defaultOptions, options);

  const {
    choiceIdSelected,
    mapIdSelected,
    idsValidated,
    setChoiceIdSelected,
    handleValidateClick,
    handleResetClick
  } = useMapGame(id);

  const finished = idsValidated.length === data.length;
  const canValidate = mapIdSelected && choiceIdSelected;

  return (
    <div className="map-game-container">
        <main>
          <section>
            <MapComponent/>
          </section>
          <aside>
            <ListChoice 
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
          {idsValidated.length > 0 && <ResetButton onClick={handleResetClick}/>}
        </footer>
    </div>
  );
}

const mapDataModuleToProps = ({data, MapComponent, options}) => ({data, MapComponent, options});

export default lazy(mapDataModuleToProps)(MapGame);
