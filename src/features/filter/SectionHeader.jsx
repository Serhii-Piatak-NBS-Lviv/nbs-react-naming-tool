import { useSelector } from 'react-redux';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';

const SectionHeader = ({title, subTitle}) => {
    const theme = useSelector(state => state.common.theme);

    const mainTitle = css(themify('ttt-default','filters-title'));
    const overrideTitle = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filters-title')) : null;

    const mainSubtitle = css(themify('ttt-default','filters-subtitle'));
    const overrideSubtitle = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filters-subtitle')) : null;
    
    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

  return (
    <>
        <h2 className={cx(
            { [mainTitle]: true },
            { [overrideTitle]: isThemeOverriden }
        )}>
            {title}
        </h2>
        <p className={cx(
            { [mainSubtitle]: true },
            { [overrideSubtitle]: isThemeOverriden }
        )}>
            {subTitle}
        </p>
    </>    
  )
}

export default SectionHeader;
