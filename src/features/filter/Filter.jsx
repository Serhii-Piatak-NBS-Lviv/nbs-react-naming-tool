import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { css, ThemeProvider, useTheme } from '@emotion/react';
import themes from '../../app/themes';
import restAPI from '../../app/apisimul/filter/name-categories';

/**
* @restAPI  - list of name categories will come from 
Drupal back-end. For first develop iteration static JSON
used from src/app/apisimul  folder
* @function Filter
* When Filter component being monted to the page, list
* of name categories should be fetched from backend, pushed
* to filterSlice part of Redux storage
**/

const Filter = ({locale, themeName}) => {
    const { t } = useTranslation();
    const themingParams = themes[themeName].filter;

    return(
        <ThemeProvider theme={themingParams}>
            <img src={require('../../app/images/Content - Search.png')} />
        </ThemeProvider>
        
    )
};

export default Filter;