import { useSelector, useDispatch  } from 'react-redux';
import { css, cx } from '@emotion/css';
import themify, {themes} from '../../themes';

import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperItem from './SwiperItem';
import SelectedFilters from './SelectedFilters';

import { setSelectedCategory } from './filterSlice';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const SwiperWithFilters = ({title, restAPI}) => {
    const theme = useSelector(state => state.common.theme);
    const dispatch = useDispatch();    

    const mainTitle = css(themify('ttt-default','filters-categories-title'));
    const overrideTitle = ((theme !== 'ttt-default') && (themes[theme])) ? css(themify(theme,'filters-categories-title')) : null;

    const isThemeOverriden = ((theme !== 'ttt-default') && (themes[theme])) ? true : false;

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    }

  return (
    <div>
        <h3 className={cx(
            { [mainTitle]: true },
            { [overrideTitle]: isThemeOverriden }
        )}>
            {title}
        </h3>
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={7}
            navigation
            scrollbar={{ draggable: true }}>
            {
                restAPI.list.map((category, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SwiperItem {...category} handleFilter={handleFilter}/>
                        </SwiperSlide>
                    )
                })
            }       
            <SelectedFilters handleFilter={handleFilter}/> 
        </Swiper>
    </div>
    
  )
}

export default SwiperWithFilters;
