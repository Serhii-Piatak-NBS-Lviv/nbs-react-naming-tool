import { useDispatch } from 'react-redux';
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
    const [swiperWrapper, overrideSwiperWrapper, isSwiperWrapperOverriden] = useThemify('filters-swiper-wrapper');

    const numOfSlides = restAPI.list.length > 7 ? 7 : restAPI.list.length;
    const isScrollbar = window.innerWidth > 780 ? false : { draggable: true };

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    }

  return (
    <>
        <h3 className={cx(
            { [mainTitle]: true },
            { [overrideTitle]: isMainTitleOverriden }
        )}>
            {title}
        </h3>
        <div className={cx(
            { [swiperWrapper]: true },
            { [overrideSwiperWrapper]: isSwiperWrapperOverriden }
        )}>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={20}            
                navigation
                slidesPerView={numOfSlides}
                scrollbar={isScrollbar}>
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
    </>    
  )
}

export default SwiperWithFilters;
