import React from 'react';
import ListChoice from './ListChoice';
import SuccessMessage from './SuccessMessage';
import Button from '../../common/Button';
import ResetButton from './ResetButton';
import {useMapGame} from './mapHooks';
import lazy from '../../../hoc/lazy';
import styles from './MapGame.module.css';

const defaultOptions = {
  getChoiceLabel: item => `${item.id} - ${item.label}`
};

function MapGame({id, title, data, MapComponent, options}) {
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
    <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.section}>
            <MapComponent/>
            <p className={styles.mapTitle}>{title}</p>
          </section>
          <aside className={styles.aside}>
            <ListChoice 
              data={data} 
              onChange={setChoiceIdSelected}
              choiceIdSelected={choiceIdSelected}
              idsValidated={idsValidated}
              getChoiceLabel={getChoiceLabel}
            />
          </aside>
        </main>
        <footer className={styles.footer}>
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
