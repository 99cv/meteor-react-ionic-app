import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// component
import { Hello } from './Hello';
import { Info } from './Info';
import SideMenu from './SideMenu';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './variable.css';

export const App = () => {

return (
<IonReactRouter>
    <div id="app">
      <IonApp>
        <IonSplitPane contentId="main">
          <SideMenu></SideMenu>
          <IonPage id="main">
            <Switch>
              <Route path="/home" component={Hello} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/new" component={Info} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </IonReactRouter>
);
};

