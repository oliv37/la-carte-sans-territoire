import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LazyMapGame from './components/game/map/MapGame';
import appData from './appData';

const isProd = process.env.NODE_ENV === 'production';
const basename = isProd ? '/la-carte-sans-territoire' : undefined;

function App() {
  return (
    <Router basename={basename}>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        {
          appData.map(({id, routePath, lazyDataModule}) => (
            <Route 
              key={id}
              path={routePath} 
              render={routeProps => (
                <LazyMapGame {...routeProps} id={id} lazyDataModule={lazyDataModule}/>
              )} 
            />
          ))
        }
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
