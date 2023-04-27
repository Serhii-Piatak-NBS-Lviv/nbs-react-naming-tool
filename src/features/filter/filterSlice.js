import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryList: [],
        selectedCategories: [],
        gender: "",
        specificName: "",
    },
    
    reducers: {
        setSelectedCategory: (state, action) => {
            const index = state.selectedCategories.indexOf(action.payload);
            if (index === -1) {
                return {
                    ...state,
                    selectedCategories: [...state.selectedCategories, action.payload],
                };
            } else {
                return {
                    ...state,
                    selectedCategories: [
                        ...state.selectedCategories.slice(0, index),
                        ...state.selectedCategories.slice(index + 1),
                    ],
                };
            }            
        },
        setGender: (state, action) => {
            return {
                ...state,
                gender: action.payload,
            };
        },        
        setSpecificName: (state, action) => {
            return {
                ...state,
                specificName: action.payload,
            };
        },
    },    
});

export const { setSelectedCategory, setSpecificName, setGender } = filterSlice.actions;

export default filterSlice.reducer;