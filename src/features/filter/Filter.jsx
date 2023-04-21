import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';

import restAPI from '../../app/apisimul/filter/name-categories';

import SectionHeader from './SectionHeader';
import SwiperWithFilters from './SwiperWithFilters';
import GenderSelection from './GenderSelection';
import SearchInput from './SearchInput';

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

    const bottomFilter = css(themify('ttt-default','bottom-filter-wrapper'));
    const overrideBottomFilter = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'bottom-filter-wrapper')) : null;

    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

    return(
        <div className={cx(
            { [defaultTheme]: true },
            { [overrideTheme]: isThemeOverriden }
        )} id="filters">            
            <SectionHeader
                title={t('filter header - get inspiration')}
                subTitle={t('filter subtitle - we compiled a list')}
            />
            <SwiperWithFilters
                title={t('filter slider title')}
                restAPI={restAPI}
            />
            <div className={cx(
            { [bottomFilter]: true },
            { [overrideBottomFilter]: isThemeOverriden }
        )}>
                <SearchInput 
                    title={t('filter live search title')}
                />
                <GenderSelection 
                    title={t('filter gender selector title')}
                />
            </div>
        </div>        
    )
};

export default Filter;