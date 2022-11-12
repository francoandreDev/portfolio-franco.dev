import { configureStore } from '@reduxjs/toolkit';
import {
    sectionReducer,
    themesReducer,
    userNameReducer
} from './slices/exports';

export const store = configureStore({
    reducer: {
        section: sectionReducer,
        themes: themesReducer,
        userName: userNameReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
