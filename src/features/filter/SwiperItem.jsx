import { useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

const CategoryItem = ({title, icon, handleFilter}) => {
    const activeFilters = useSelector(state => state.filter.selectedCategories);

    const [categoryWrapper, overrideCategoryWrapper, isCategoryWrapperOverriden] = useThemify('filter-category');
    const [Title, overrideTitle, isTitleOverriden] = useThemify('filter-category-title');

    const isActive = (activeFilters, title) => {
        return activeFilters.includes(title) 
            ? {border: '1px solid #E81C24'} 
            : {}
    }

  return (
    <div 
        style={isActive(activeFilters, title)}
        className={cx(
            { [categoryWrapper]: true },
            { [overrideCategoryWrapper]: isCategoryWrapperOverriden }
        )}
        onClick={() => handleFilter(title)}
    >
        <img src={require(`../../app/apisimul/filter/${icon}`)} alt={title} />
        <span className={cx(
            { [Title]: true },
            { [overrideTitle]: isTitleOverriden }
        )}>{title}</span>
    </div>
  )
}

export default CategoryItem;
