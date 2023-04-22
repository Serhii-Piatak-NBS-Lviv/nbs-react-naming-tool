import { useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import useThemify from '../../app/hooks/useThemify';

const SelectedFilters = ({handleFilter}) => {
    const activeFilters = useSelector(state => state.filter.selectedCategories);
    const [animationParent] = useAutoAnimate();

    const [selectedFilters, overrideSelectedFilters, isSelectedFiltersOverriden] = useThemify('selected-filters-wrapper');
    const [selectedItem, overrideSelectedItem, isSelectedItemOverriden] = useThemify('selected-filters-item');

  return (
    <div className={cx(
        { [selectedFilters]: true },
        { [overrideSelectedFilters]: isSelectedFiltersOverriden }
    )}
        ref={animationParent}
    >

        {
            activeFilters.map((item) => {
                return (
                    <span className={cx(
                        { [selectedItem]: true },
                        { [overrideSelectedItem]: isSelectedItemOverriden }
                    )}
                        onClick={() => handleFilter(item)}
                        key={item}
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
