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

    const countOfSlides = restAPI.list.length > 7 ? 7 : restAPI.list.length;
    const isScrollbar = window.innerWidth > 768 ? false : { draggable: true };

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
                scrollbar={isScrollbar}
                breakpoints={{
                    320: {
                        slidesPerView: 3.2,
                        spaceBetween: 16
                    },
                    480: {
                        slidesPerView: 3.6,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 16
                    },
                    768: {
                      slidesPerView: 5,
                    },
                    1024: {
                      slidesPerView: 6,
                    },
                    1139: {
                        slidesPerView: countOfSlides,
                    }
                }}>
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
