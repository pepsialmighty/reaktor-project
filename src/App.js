import React, { Suspense, lazy } from 'react';
import './App.css';

// import JacketPage from './components/JacketPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing-page/landing-page';
import ShirtsPage from './components/shirts-page/shirts-page';
import AccessoriesPage from './components/accessories/accessories-page';

const JacketPage = lazy(() => import('./components/jacket-page/jacket-page'));

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/shirts'>
              <ShirtsPage />
            </Route>
            <Route path='/jackets'>
              <JacketPage />
            </Route>
            <Route path='/accessories'>
              <AccessoriesPage />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
