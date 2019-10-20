import React from 'react';
import ListChoice from './ListChoice';
import MapTitle from './MapTitle';
import {useMapGame} from './mapHooks';
import lazy from '../../../hoc/lazy';
import styles from './MapGame.module.css';
import MapChoice from './MapChoice';
import MapFooter from './MapFooter';
import MapSourceLink from './MapSourceLink';

const defaultOptions = {
  getChoiceLabel: item => `${item.id} - ${item.label}`
};

function MapGame({id, title, source, data, MapComponent, options}) {
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

  // TODO : Gestion du focus (css)

  return (
    <form className={styles.container} onSubmit={handleValidateClick}>
        <main className={styles.main}>
          <section className={styles.section}>
			<MapTitle 
				title={title}
				showResetButton={idsValidated.length > 0}
				animateResetButton={finished}
				onClickResetButton={handleResetClick}
			/>
			{source && <MapSourceLink url={source}/>}
			<MapChoice
				data={data}
				onChange={setMapIdSelected}
				mapIdSelected={mapIdSelected}
				idsValidated={idsValidated}
			/>
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
		<MapFooter
			success={finished}
			error={hasError}
			btnDisabled={!canValidate}
		/>
    </form>
  );
}

const mapDataModuleToProps = ({data, MapComponent, options}) => ({data, MapComponent, options});

export default lazy(mapDataModuleToProps)(MapGame);
