import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserNameState {
    value: string;
}

const initialState: IUserNameState = {
    value: ''
};

export const userNameSlice = createSlice({
    name: 'userName',
    initialState,
    reducers: {
        changeUserName: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
