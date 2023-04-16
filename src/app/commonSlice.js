import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
    name: 'common',
    initialState: {
        "locale": "en",
        "theme": "ttt-default",
    },
    reducers: {},
});

export const {} = commonSlice.actions;

export default commonSlice.reducer;