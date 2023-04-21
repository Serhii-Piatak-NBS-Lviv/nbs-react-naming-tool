import { useSelector } from 'react-redux';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';


const SelectedFilters = ({handleFilter}) => {
    const theme = useSelector(state => state.common.theme);
    const activeFilters = useSelector(state => state.filter.selectedCategories);

    const selectedFilters = css(themify('ttt-default','selected-filters-wrapper'));
    const overrideSelectedFilters = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'selected-filters-wrapper')) : null;

    const selectedItem = css(themify('ttt-default','selected-filters-item'));
    const overrideSelectedItem = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'selected-filters-item')) : null;

    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

  return (
    <div className={cx(
        { [selectedFilters]: true },
        { [overrideSelectedFilters]: isThemeOverriden }
    )}>

        {
            activeFilters.map((item, index) => {
                return (
                    <span className={cx(
                        { [selectedItem]: true },
                        { [overrideSelectedItem]: isThemeOverriden }
                    )}
                        onClick={() => handleFilter(item)}
                        key={index}
                    >
                        {item}
                    </span>
                )                
            })
        }  
              
    </div>
  )
}

export default SelectedFilters;
