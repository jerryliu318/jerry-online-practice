import React, { useReducer, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { initState, reducer } from './Reducer';

const DispatchContext = React.createContext(null);
const DataStoreContext = React.createContext(null);

export const StoreProvider = (props) => {
    const { value, children } = props;
    const { serverInfo = {} } = value;
    // console.log(`init state by server info`, JSON.stringify(serverInfo));
    initState.myUsername = serverInfo.name;

    const [ dataStore, dispatch ] = useReducer(reducer, initState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <DataStoreContext.Provider value={dataStore}>
                {children}
            </DataStoreContext.Provider>
        </DispatchContext.Provider>
    );
};

export const StyledProvider = (props) => {
    return (
        <ThemeProvider theme={{ colorPrimary: '#61dafb' }}>
            {props.children}
        </ThemeProvider>
    );
    
};

export const useDispatch = () => useContext(DispatchContext);
export const useStore = () => useContext(DataStoreContext);