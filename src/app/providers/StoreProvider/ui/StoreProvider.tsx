import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface StoreProviderProps{
    children?:ReactNode
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props:StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
