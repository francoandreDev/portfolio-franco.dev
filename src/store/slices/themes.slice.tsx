import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IThemeState {
    value: string;
}

const initialState: IThemeState = {
    value: 'dark'
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;