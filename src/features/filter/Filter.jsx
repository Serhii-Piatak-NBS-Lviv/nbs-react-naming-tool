import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cx } from '@emotion/css';
import useThemify from '../../app/useThemify';
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

const Filter = () => {
    const { t } = useTranslation();
    const [defaultTheme, overrideTheme, isThemeOverriden] = useThemify('filters');

    return(
        <div className={cx(
            { [defaultTheme]: true },
            { [overrideTheme]: isThemeOverriden }
        )} id="filters">
            <img src={require('../../app/images/Content - Search.png')} />
            <h1>{t('view hero landing title')}</h1>
        </div>
        
    )
};

export default Filter;