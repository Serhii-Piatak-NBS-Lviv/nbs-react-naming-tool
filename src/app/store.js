import { configureStore } from '@reduxjs/toolkit';
import viewReducer from '../features/view/viewSlice';
import filterReducer from '../features/filter/filterSlice';
import commonReducer from './commonSlice';

export default configureStore({
    reducer: {
        filter: filterReducer,
        view: viewReducer,
        common: commonReducer,
        isLoading: false,
    }
});