import React from 'react';
import { css, ThemeProvider, useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import themes from '../../themes';
import namesList from '../../app/apisimul/view/names-list';
import nameSelection from '../../app/apisimul/view/name-selection';

/**
* @author
* @function View
**/

export const View = ({locale, themeName}) => {
    const { t } = useTranslation();
    const themingParams = themes[themeName].view;

    return(
        <ThemeProvider theme={themingParams}>
            <img src={require('../../app/images/Content - Results.png')} />
        </ThemeProvider>
        
    )
};

export default View;