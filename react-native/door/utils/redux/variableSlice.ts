import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface VariableInterface {
    testVariable: string;
}

const initialState: VariableInterface = {
    testVariable: 'this is some random varible',
};

export const variableSlice = createSlice({
    name: 'variables',
    initialState: {value: initialState},
    reducers: {
        setVariables: (
            state: VariableInterface,
            action: PayloadAction<VariableInterface>,
        ) => {
            // update the varible here
        },
    },
});

export const {setVariables} = variableSlice.actions;
export default variableSlice.reducer;
