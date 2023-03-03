import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import variableReducer from './variableSlice';

const store = configureStore({
    reducer: {
        authentication: authReducer,
        variables: variableReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
