import { useDispatch } from 'react-redux';
import { cx } from '@emotion/css';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import useThemify from '../../app/hooks/useThemify';
import useThemifiedComponent from '../../app/hooks/useThemifiedComponent';
import SwiperItem from './SwiperItem';
import SelectedFilters from './SelectedFilters';
import { setSelectedCategory } from './filterSlice';

const SwiperWithFilters = ({restAPI, title}) => {
    const dispatch = useDispatch();    

    // const [mainTitle, overrideTitle, isMainTitleOverriden] = useThemify('filters-categories-title');
    const [cssCategoriesTitle] = useThemifiedComponent('filters-categories-title');

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    }

  return (
    <div>
        <h3 className={cssCategoriesTitle}> {title} </h3>
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
