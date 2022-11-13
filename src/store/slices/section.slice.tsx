import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISectionState {
    id: string;
    title: string;
}

const initialState: ISectionState = {
    id: '#aboutMe',
    title: 'About Me'
};

const transformIdIntoTitle = (id: string) => {
    let newString = id.normalize().replace('#', '');
    const newWords = newString.split(/(?=[A-Z])/);
    newWords[0] = firstMayus(newWords[0]);
    newString = '';
    newWords.forEach((word) => {
        newString = `${newString} ${word}`;
    });
    return newString;
};

const firstMayus = (word: string) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
};

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        changeSection: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
            state.title = transformIdIntoTitle(action.payload);
        }
    }
});

export const { changeSection } = sectionSlice.actions;

export default sectionSlice.reducer;
