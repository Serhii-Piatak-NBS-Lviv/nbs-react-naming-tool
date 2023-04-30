import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './NameSwiper.css';

import namesList from '../../app/apisimul/view/names-list';

const wrapper = {
    maxWidth: '1139px',
    marginRight: '32px',
    height: '532px',
    position: 'relative',
}

const swiperStyles = {
    maxHeight: '448px',
}

const swiperItem = {
    padding: '16px 24px',
    gap: '8px',
    width: '238px',
    maxHeight: '56px',
    background: '#F9F8F5',
    boxShadow: '0px 0px 1px rgba(58, 53, 51, 0.25), 0px 1px 4px rgba(58, 53, 51, 0.08)',
    borderRadius: '8px',
    boxSizing: 'border-box',
    cursor: 'grab',
}

const NameSwiper = () => {

    const countOfSlides = (maxCount) => {
        return namesList.list.length > maxCount
            ? maxCount
            : namesList.list.length;
    }

    return (
        <div
            className={'nameSwipper'}
            style={wrapper}
        >
            <Swiper
                style={swiperStyles}
                modules={[Navigation]}
                navigation
                spaceBetween={12}
                slidesPerView={countOfSlides(7)}
                direction="vertical"
                mousewheel={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    namesList.list.map(item => {
                        return (
                            <SwiperSlide
                                key={item.title}
                                style={swiperItem}
                            >
                                {item.title}
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}

export default NameSwiper;
