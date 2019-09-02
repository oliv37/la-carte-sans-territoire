import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LazyMapGame from './components/game/LazyMapGame';
import appData from './appData';

const isProd = process.env.NODE_ENV === 'production';
const basename = isProd ? '/la-carte-sans-territoire' : undefined;

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename={basename}>
      <Header/>
      <Route path="/" exact component={Home} />
      {
        appData.map(({routePath, lazyData}, index) => (
          <Route 
            key={index}
            path={routePath} 
            render={routeProps => (
              <LazyMapGame {...routeProps} lazyData={lazyData}/>
            )} 
          />
        ))
      }
    </Router>
  );
}

export default App;
