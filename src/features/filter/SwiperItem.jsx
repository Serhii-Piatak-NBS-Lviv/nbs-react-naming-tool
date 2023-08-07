import { useSelector } from 'react-redux';

import useThemifiedComponent from '../../app/hooks/useThemifiedComponent';

const CategoryItem = ({ title, icon_desktop_tablet, icon_mobile, handleFilter }) => {
    const activeFilters = useSelector(state => state.filter.selectedCategories);

    console.log(icon_desktop_tablet, icon_mobile)

    const [cssCategoryWrapper] = useThemifiedComponent('filter-category');
    const [cssTitle] = useThemifiedComponent('filter-category-title');

    const isActive = (activeFilters, title) => {
        return activeFilters.includes(title)
            ? { border: '1px solid #E81C24' }
            : {}
    }

    return (
        <div
            style={isActive(activeFilters, title)}
            className={cssCategoryWrapper}
            onClick={() => handleFilter(title)}
        >
            <img 
                src={icon_desktop_tablet.url} 
                alt={icon_desktop_tablet.alt_text} 
                onError={(e) => {
                    console.log(e)
                    e.target.onerror = null;
                    e.target.src = require(`../../app/images/missing-category-basic.png`); 
                    e.target.alt = 'placeholder'                    
                }}
                style={{width: "50px", height: "54px"}}
            />
            <span className={cssTitle}>{title}</span>
        </div>
    )
}

export default CategoryItem;
