import { configureStore } from '@reduxjs/toolkit';
import { themesReducer, userNameReducer } from './slices/exports';

export const store = configureStore({
    reducer: {
        themes: themesReducer,
        userName: userNameReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
