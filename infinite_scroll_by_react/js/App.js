
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { StoreProvider, StyledProvider } from './Provider';

import Header from './Header';
import AboutMe from './AboutMe';
import OtherPublicRepo from './OtherPublicRepo';

const App = ({ serverInfo }) => {
    
    return (
        <StoreProvider value={{ serverInfo }}>
            <StyledProvider>
                <Switch>
                    <Route>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <AboutMe />
                            </Route>
                            <Route exact path="/others">
                                <OtherPublicRepo />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            </StyledProvider>
        </StoreProvider>
    );
};
    
  
export default App;
