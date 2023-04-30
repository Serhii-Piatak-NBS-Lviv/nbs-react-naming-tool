import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { cx } from '@emotion/css';
=======
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

<<<<<<< HEAD
// import useThemify from '../../app/hooks/useThemify';
=======
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './CategorySwiper.css';

>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
import useThemifiedComponent from '../../app/hooks/useThemifiedComponent';
import SwiperItem from './SwiperItem';
import SelectedFilters from './SelectedFilters';
import { setSelectedCategory } from './filterSlice';

<<<<<<< HEAD
const SwiperWithFilters = ({restAPI, title}) => {
    const dispatch = useDispatch();    

    // const [mainTitle, overrideTitle, isMainTitleOverriden] = useThemify('filters-categories-title');
    const [cssCategoriesTitle] = useThemifiedComponent('filters-categories-title');
=======
const SwiperWithFilters = ({ restAPI, title }) => {
    const dispatch = useDispatch();

    const countOfSlides = (maxCount) => {
        return restAPI.list.length > maxCount
            ? maxCount
            : restAPI.list.length;
    }
    const isScrollbar = window.innerWidth > 768 ? false : { draggable: true };

    const [cssCategoriesTitle] = useThemifiedComponent('filters-categories-title');
    const [cssSwiperWrapper] = useThemifiedComponent('filters-swiper-wrapper');
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc

    const handleFilter = (category) => {
        dispatch(setSelectedCategory(category));
    }

<<<<<<< HEAD
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
=======
    return (
        <>
            <h3 className={cssCategoriesTitle}>
                {title}
            </h3>
            <div className={cssSwiperWrapper}>
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
                            slidesPerView: countOfSlides(4),
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: countOfSlides(5),
                        },
                        1024: {
                            slidesPerView: countOfSlides(6),
                        },
                        1139: {
                            slidesPerView: countOfSlides(7),
                        }
                    }}>
                    {
                        restAPI.list.map((category, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <SwiperItem {...category} handleFilter={handleFilter} />
                                </SwiperSlide>
                            )
                        })
                    }
                    <SelectedFilters handleFilter={handleFilter} />
                </Swiper>
            </div>
        </>

    )
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
}

export default SwiperWithFilters;
