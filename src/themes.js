import FONTS_REGISTRY from './fonts';

/**
 *   
 */

export const themes = {
    "ttt-default": {

        "filters": {
            'backgroundColor': '#F9F8F5',
            "border": 'none',
            'textAlign': 'center',
            'padding': '40px 15px',            
        },

        "filters-title": {
            'backgroundColor': 'transparent',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',  
            'fontWeight': '400',          
            'fontSize': '40px',
            'lineHeight': '52px',
        },

        "filters-subtitle": {
            'backgroundColor': 'transparent',
            'border': 'none',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '400',
            'fontSize': '20px',
            'lineHeight': '32px',
            'maxWidth': '785px',
            'margin': '0 auto',
            
        },        

        "filters-categories-title": {
            'backgroundColor': 'transparent',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '400',
            'fontSize': '20px',
            'lineHeight': '32px',
            'textAlign': 'left',
            'margin': '40px 0 24px',
        },

        "filter-category": {
            'boxSizing': 'border-box',
            'cursor': 'pointer',
            'padding': '25px 0',
            'margin': 'auto',
            'height': '130px',
            'width': '130px',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'background': '#FFFFFF',
            'border': '1px solid #F9F8F5',
            'boxShadow': '0px 4px 12px rgba(88, 79, 76, 0.12)',
            'borderRadius': '10px',
        },

        "filter-category-title": {
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '400',
            'fontSize': '18px',
            'lineHeight': '24px',
            'textAlign': 'center',
            'color': '#000000',
        },

        "selected-filters-wrapper": {
            'display': 'flex',
            'flexWrap': 'wrap',
            'margin': '24px 0 16px',
        },

        "selected-filters-item": {
            'fontFamily': 'roboto_slabregular',
            'background': '#FFFFFF',
            'border': '1px solid #D8D7D6',
            'borderRadius': '5px',
            'padding': '5px 10px',
            'cursor': 'pointer',
            'fontWeight': '400',
            'fontSize': '16px',
            'lineHeight': '24px',
            'color': '#000000',
            'margin': '0 16px 16px 0', 
            
            ':hover': {
                'background': 'green',
            },
        },

        "bottom-filter-wrapper": {
            'display': 'flex',
            'justifyContent': 'space-between',
        },



        "view": {
            
        },

        "fonts-list": ['roboto_slabregular']
    },
    "test-dummy": {

        "filters": {
            'backgroundColor': 'green',
            "border": '3px dashed yellow',
        },

        "filters-title": {
            'backgroundColor': 'transparent',
            'border': 'none',
            'color': 'red',
            'fontFamily': 'roboto_slabregular',
        },

        "filters-subtitle": {
            'backgroundColor': 'purple',
        },

        "fonts-list": ['roboto_slabregular', 'robotothin_italic']
    },
};

const themify = (theme, component) => {
    return themes[theme][component];
};

export const fontsLoader = (theme) => {
    const fontsList = themes['ttt-default']["fonts-list"];

    if ((theme !== 'ttt-default') && (themes[theme]["fonts-list"].length)) {
        themes[theme]["fonts-list"].forEach(
            fnt => {if (!fontsList.includes(fnt)) fontsList.push(fnt)}
        );
    };

    const loaderExpression = fontsList.reduce(
        (acc, itm) => {
            acc = acc + `@font-face {
                font-family: ${itm};
                src: ${FONTS_REGISTRY[itm]["sources"]};
                font-weight: ${FONTS_REGISTRY[itm]["fontWeight"]};
                font-style: ${FONTS_REGISTRY[itm]["fontStyle"]};
            };` + `\n`;
            return acc;
        }, ``
    );
    return loaderExpression;
};

export default themify;