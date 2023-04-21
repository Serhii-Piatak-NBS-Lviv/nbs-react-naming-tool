import { useSelector } from 'react-redux';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';

const CategoryItem = ({title, icon, handleFilter}) => {
    const theme = useSelector(state => state.common.theme);

    const categoryWrapper = css(themify('ttt-default','filter-category'));
    const overrideCategoryWrapper = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filter-category')) : null;

    const Title = css(themify('ttt-default','filter-category-title'));
    const overrideTitle = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filter-category-title')) : null;

    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

  return (
    <div className={cx(
        { [categoryWrapper]: true },
        { [overrideCategoryWrapper]: isThemeOverriden }
    )}
        onClick={() => handleFilter(title)}
    >
        <img src={require(`../../app/apisimul/filter/${icon}`)} alt={title} />
        <span className={cx(
            { [Title]: true },
            { [overrideTitle]: isThemeOverriden }
        )}>{title}</span>
    </div>
  )
}

export default CategoryItem;
