import React from 'react';
import classNames from 'classnames';
import ListChoice from './ListChoice';
import SuccessMessage from './SuccessMessage';
import Button from '../../common/Button';
import ResetButton from './ResetButton';
import {useMapGame} from './mapHooks';
import lazy from '../../../hoc/lazy';
import styles from './MapGame.module.css';
import btnStyles from '../../common/Button.module.css';

const defaultOptions = {
  getChoiceLabel: item => `${item.id} - ${item.label}`
};

function MapGame({id, title, data, MapComponent, options}) {
  const {getChoiceLabel} = Object.assign({}, defaultOptions, options);

  const {
    choiceIdSelected,
    mapIdSelected,
    idsValidated,
    idHighlighted,
    hasError,
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
            <p className={styles.mapTitle}>
              {title}
              {idsValidated.length > 0 && <ResetButton onClick={handleResetClick}/>}
            </p>
          </section>
          <aside className={styles.aside}>
            <ListChoice 
              data={data} 
              onChange={setChoiceIdSelected}
              choiceIdSelected={choiceIdSelected}
              idHighlighted={idHighlighted}
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
              className={classNames({[btnStyles.error]: hasError})}
              children="Valider"
            />
          )}
        </footer>
    </div>
  );
}

const mapDataModuleToProps = ({data, MapComponent, options}) => ({data, MapComponent, options});

export default lazy(mapDataModuleToProps)(MapGame);
