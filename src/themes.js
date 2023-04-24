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
        },

        'filters-container':{
            'padding': '40px 15px',
            'maxWidth': '1139px',
            'margin': '0 auto',
        },

        "filters-title": {
            'backgroundColor': 'transparent',
            'color': '#3A3533',
            'fontFamily': 'roboto_slabregular',  
            'fontWeight': '400',          
            'fontSize': '40px',
            'lineHeight': '52px',
            'margin': '33px 0 16px',
        },

        'filters-heading-underline': {
            'height': '1px',
            'display': 'block',
            'margin': '16px auto',
            'borderBottom': '1.25px dashed #C9C5B9',
            'maxWidth': '730px',
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
        
        "filters-swiper-wrapper": {
            'position': 'relative',
            'margin': '0 auto'
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
            'margin': '0 auto',
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
            'transition': '.2s',
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
            'margin': '24px 0 0',
        },

        "selected-filters-item": {
            'fontFamily': 'roboto_slabregular',
            'whiteSpace': 'nowrap',
            'width': 'fit-content',
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
        },

        "bottom-filter-wrapper": {
            'display': 'flex',
            'alignItems': 'flex-end',
            'justifyContent': 'space-between',
            'textAlign': 'left',
        },
        
        'filter-searchInput-wrapper': {
            'width': '100%',
            'marginRight': '40px',
        },

        'filter-input-title': {
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '400',
            'fontSize': '20px',
            'lineHeight': '32px',
            'color': '#3A3533',
        },

        'filter-input-container': {
            'background': '#FFFFFF',
            'boxSizing': 'border-box',
            'border': '1px solid #F9F8F5',
            'boxShadow': '0px 4px 12px rgba(88, 79, 76, 0.12)',
            'borderRadius': '10px',
            'height': '92px',
            'padding': '22px 27px',
            'display': 'flex',
        },

        'filter-input-search': {
            'width': '100%',
            'border': 'none',
            'borderBottom': 'solid 1px #C9C5B9',
            'padding': '0 32px',
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '300',
            'fontSize': '16px',
            'lineHeight': '24px',
            'color': '#6B6868',
            'position': 'relative',

            ':focus-visible': {
                'outline': 'none',
            },

            '::before': {
                'content': '""',
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '30px',
                'height': '30px',
                'background': 'red',
            }
        },

        "filter-gender-section": {
            'background': '#FFFFFF',
            'border': '1px solid #F9F8F5',
            'boxShadow': '0px 4px 12px rgba(88, 79, 76, 0.12)',
            'borderRadius': '10px',
            'padding': '16px 27px',
            'minWidth': '293px',
            'height': '92px',
            'boxSizing': 'border-box',
        },

        "filter-gender-section-title": {
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '300',
            'fontSize': '16px',
            'lineHeight': '24px',            
            'color': '#3A3533',
            'margin': '0 0 15px',
        },

        'filter-gender-input': {
            'margin': '0 8px 0 0',
            'cursor': 'pointer',
        },

        'filter-gender-label': {
            'fontFamily': 'roboto_slabregular',
            'fontWeight': '400',
            'fontSize': '16px',
            'lineHeight': '24px',
            'color': '#3A3533',
            'marginRight': '12px',
            'cursor': 'pointer',
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

        "fonts-list": ['roboto_slabregular', 'robotolight']
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