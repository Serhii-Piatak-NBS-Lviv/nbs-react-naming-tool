import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

const CategoryItem = ({title, icon, handleFilter}) => {

    const [categoryWrapper, overrideCategoryWrapper, isCategoryWrapperOverriden] = useThemify('filter-category');
    const [Title, overrideTitle, isTitleOverriden] = useThemify('filter-category');

  return (
    <div className={cx(
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
