import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISectionState {
    value: string;
}

const initialState: ISectionState = {
    value: 'aboutMe'
};

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        changeSection: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { changeSection } = sectionSlice.actions;

export default sectionSlice.reducer;
