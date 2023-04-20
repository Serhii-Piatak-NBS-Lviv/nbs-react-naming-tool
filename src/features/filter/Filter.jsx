import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';
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
    const theme = useSelector(state => state.common.theme);

    const defaultTheme = css(themify('ttt-default','filters'));
    const overrideTheme = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filters')) : null;
    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

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