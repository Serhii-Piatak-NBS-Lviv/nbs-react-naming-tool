import { createSlice } from '@reduxjs/toolkit';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        "hero_image": "../../app/apisimul/view/hero-puppy.png",
        "names_list": [],
        "selected_name": {
            "id": "",
            "title": "",
            "taxonomy_terms": {
                "capital_letter": "",
                "categories": [],
                "gender": "",
            },
            "description": "",
        }
    },
    reducers: {},
});

export const {} = viewSlice.actions;

export default viewSlice.reducer;