import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LazyMapGame from './components/game/map/MapGame';
import {MAP} from './constants/gameType';
import appData from './data/appData';

const GITHUB_PAGES_BASENAME = "/la-carte-sans-territoire";

const basename = (function() {
	try {
		if (window.location.pathname.startsWith(GITHUB_PAGES_BASENAME)) {
			return GITHUB_PAGES_BASENAME;
		}
	} catch(e) {}

	return undefined;
})();

function getLazyComponent(type) {
  switch(type) {
    case MAP:
      return LazyMapGame;
    default: 
      return LazyMapGame;
  }
}

function App() {
  return (
    <Router basename={basename}>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        {
          appData.map(({id, routePath, type, title, source, lazyDataModule}) => {
            const LazyComponent = getLazyComponent(type);

            return (
              <Route 
                key={id}
                path={routePath} 
                render={routeProps => (
                  <LazyComponent 
                    {...routeProps} 
                    id={id}
					title={title}
					source={source}
                    lazyDataModule={lazyDataModule}
                  />
                )} 
              />
            );
          })
        }
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
