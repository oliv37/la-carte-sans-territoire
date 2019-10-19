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
    setMapIdSelected,
    setChoiceIdSelected,
    handleValidateClick,
    handleResetClick
  } = useMapGame(id);

  const finished = idsValidated.length === data.length;
  const canValidate = mapIdSelected && choiceIdSelected;

  function handleMapIdChange(e) {
    setMapIdSelected(e.target.value);
  }

  // TODO : label/input (map) à externaliser
  // TODO : Ordre aléatoire des radio buttons de la map
  // TODO : Gestion du focus (css)

  return (
    <form className={styles.container} onSubmit={handleValidateClick}>
        <main className={styles.main}>
          <section className={styles.section}>
		  	<p className={styles.mapTitle}>
              {title}
              {idsValidated.length > 0 && 
                <ResetButton blink={finished} onClick={handleResetClick}/>
              }
            </p>
			
            {data.map(item => {
              const id = `item-${item.id}`;
              return (
                <label id={id} key={item.id}>
                  <input 
                    htmlFor={id}
                    type="radio" 
                    name="mapChoice"
                    value={item.id}
                    onChange={handleMapIdChange}
                    checked={item.id === mapIdSelected}
                    disabled={idsValidated.indexOf(item.id) !== -1}
                  />
                </label>  
              );
            })}
            <MapComponent/>
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
              type="submit"
              disabled={!canValidate}
              className={classNames({[btnStyles.error]: hasError})}
              children="Valider"
            />
          )}
        </footer>
    </form>
  );
}

const mapDataModuleToProps = ({data, MapComponent, options}) => ({data, MapComponent, options});

export default lazy(mapDataModuleToProps)(MapGame);
