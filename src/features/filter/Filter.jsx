import { useTranslation } from 'react-i18next';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';
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

    const [defaultTheme, overrideTheme, isThemeOverriden] = useThemify('filters');
    const [bottomFilter, overrideBottomFilter, isBottomFilterThemeOverriden] = useThemify('bottom-filter-wrapper');

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
            { [overrideBottomFilter]: isBottomFilterThemeOverriden }
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