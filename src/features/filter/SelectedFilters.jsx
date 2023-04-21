import { useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

const SelectedFilters = ({handleFilter}) => {
    const activeFilters = useSelector(state => state.filter.selectedCategories);

    const [selectedFilters, overrideSelectedFilters, isSelectedFiltersOverriden] = useThemify('selected-filters-wrapper');
    const [selectedItem, overrideSelectedItem, isSelectedItemOverriden] = useThemify('selected-filters-item');

  return (
    <div className={cx(
        { [selectedFilters]: true },
        { [overrideSelectedFilters]: isSelectedFiltersOverriden }
    )}>

        {
            activeFilters.map((item, index) => {
                return (
                    <span className={cx(
                        { [selectedItem]: true },
                        { [overrideSelectedItem]: isSelectedItemOverriden }
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
