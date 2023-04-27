import { useSelector } from 'react-redux';
import { css } from '@emotion/css';

import themify, {themes} from '../../themes';

export default function useThemify (uiComponent) {
    const theme = useSelector(state => state.common.theme);

    const defaultTheme = css(themify('ttt-default', uiComponent));
    const overrideTheme = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme, uiComponent)) : null;
    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

    return [defaultTheme, overrideTheme, isThemeOverriden];
};