import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthStateInterface {
    authToken: string | null; // string of authentication token
    isSignedIn: boolean; // is user signed in?
    isSignedOut: boolean; // use for screen animation when we logout from Home screen
}

const initialState: AuthStateInterface = {
    authToken: null,
    isSignedIn: true,
    isSignedOut: false,
};

export const authSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        setAuthState: (
            state: AuthStateInterface,
            action: PayloadAction<AuthStateInterface>,
        ) => {
            state.authToken = action.payload.authToken;
            state.isSignedIn = action.payload.isSignedIn;
            state.isSignedOut = action.payload.isSignedOut;
        },
    },
});

// Action creators are generated for each case reducer function
export const {setAuthState} = authSlice.actions;

export default authSlice.reducer;
