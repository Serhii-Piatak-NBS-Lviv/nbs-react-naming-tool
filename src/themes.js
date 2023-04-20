import FONTS_REGISTRY from './fonts';

/**
 *   
 */

export const themes = {
    "ttt-default": {

        "filters": {
            'backgroundColor': '#F9F8F5',
            "border": 'none',
        },

        "filters-title": {
            'backgroundColor': 'transparent',
            'border': 'none',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',
        },

        "filters-subtitle": {
            'backgroundColor': 'transparent',
            'border': 'none',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',
        },

        "filters-categories": {},

        "filters-categories-title": {},



        "view": {
            
        },

        "fonts-list": ['roboto_slabregular']
    },
    "test-dummy": {

        "filters": {
            'backgroundColor': 'green',
            "border": '3px dashed yellow',
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