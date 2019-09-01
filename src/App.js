import React, {useState} from 'react';
import Header from './components/Header';
import Choices from './components/Choices';
import FinishMessage from './components/FinishMessage';
import {
  useInitMapHandlersEffect,
  useMapSelectionEffect,
  useHandleValidateClick,
  useValidatationEffect
} from './utils/hooks';
import Button from './components/Button';

function App({data, mapComponent: MapComponent}) {
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
    <div className="app">
        <Header/>
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

export default App;
