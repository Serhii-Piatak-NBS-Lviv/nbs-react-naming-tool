import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryList: [],
        selectedCategories: [],
        gender: "",
        specificName: "",
    },
    reducers: {},
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;