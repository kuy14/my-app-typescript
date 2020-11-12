import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LSK_USER_SLICE } from '../constants';
import dataTestSliceReducer, { DataTestSlice } from '../features/dataTest/dataTest.reducer'; 
import userLoginSliceReducer, { UserSlice } from '../features/userLogin/user.reducer';

export const store = configureStore<RootState>({
    reducer: {
        dataTest: dataTestSliceReducer,
        user: userLoginSliceReducer,
    }
})

export type RootState = {
    
    user: UserSlice;
    dataTest: DataTestSlice;
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem(LSK_USER_SLICE, JSON.stringify(state.user));
})