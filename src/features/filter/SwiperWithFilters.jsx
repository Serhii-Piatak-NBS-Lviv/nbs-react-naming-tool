import { useDispatch  } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperItem from './SwiperItem';
import SelectedFilters from './SelectedFilters';

import { setSelectedCategory } from './filterSlice';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const SwiperWithFilters = ({title, restAPI}) => {
    const dispatch = useDispatch();    

    const [mainTitle, overrideTitle, isMainTitleOverriden] = useThemify('filters-categories-title');

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    }

  return (
    <div>
        <h3 className={cx(
            { [mainTitle]: true },
            { [overrideTitle]: isMainTitleOverriden }
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
