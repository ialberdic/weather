import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
import WeatherComponent from '../../components/Weather';
import WeatherContainer from '../../containers/Weather';

//import Error from '../components/UI/Error';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <WeatherContainer {...props} Layout={WeatherComponent} />
      )}
    />
    <Route
      path="/sign-up"
      //render={props => (
       /*  <TemplateNothing pageTitle="Sign Up">
          <SignUpContainer {...props} Layout={SignUpComponent} />
        </TemplateNothing> */
      //)} 
    />
  </Switch>
);

export default Index;