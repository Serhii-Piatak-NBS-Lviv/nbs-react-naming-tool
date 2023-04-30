import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';
=======
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
import useThemifiedComponent from '../../app/hooks/useThemifiedComponent';
import restAPI from '../../app/apisimul/filter/name-categories';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
<<<<<<< HEAD
    DrawerHeader,
=======
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
<<<<<<< HEAD
    Input,
=======
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
    useDisclosure
} from '@chakra-ui/react';

import SectionHeader from './SectionHeader';
import SwiperWithFilters from './SwiperWithFilters';
import GenderSelection from './GenderSelection';
import SearchInput from './SearchInput';

/**
* @restAPI  - list of name categories will come from 
Drupal back-end. For first develop iteration static JSON
used from src/app/apisimul  folder
* @function Filter
* When Filter component being monted to the page, list
* of name categories should be fetched from backend, pushed
* to filterSlice part of Redux storage
**/

const Filter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const { t } = useTranslation();

<<<<<<< HEAD
    const [defaultTheme, overrideTheme, isThemeOverriden] = useThemify('filters');
    const [bottomFilter, overrideBottomFilter, isBottomFilterThemeOverriden] = useThemify('bottom-filter-wrapper');
=======
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
    const [cssFiltersContainer] = useThemifiedComponent('filters');
    const [cssBottomFilters] = useThemifiedComponent('bottom-filter-wrapper');
    const [cssDrawerOverlay] = useThemifiedComponent('filter-drawer-overlay');
    const [cssDrawerContent] = useThemifiedComponent('filter-drawer-content');

<<<<<<< HEAD
    return(
        <div className={cssFiltersContainer} id="filters">            
=======
    return (
        <div className={cssFiltersContainer} id="filters">
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
            <SectionHeader
                title={t('filter header - get inspiration')}
                subTitle={t('filter subtitle - we compiled a list')}
            />

<<<<<<< HEAD
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Open
        </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay className={cssDrawerOverlay} />
        <DrawerContent className={cssDrawerContent}>
          <DrawerCloseButton />

          <DrawerBody>

            <SwiperWithFilters
                title={t('filter slider title')}
                restAPI={restAPI}
            />

            <div className={cssBottomFilters}>
                <SearchInput 
                    title={t('filter live search title')}
                    placeholder={t('filter live search placeholder')}
                />
                <GenderSelection 
                    title={t('filter gender selector title')}
                    radios={[
                        t('filter gender female'),
                        t('filter gender male'),
                        t('filter gender both')
                    ]}
                />
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

            {/* <SwiperWithFilters
                title={t('filter slider title')}
                restAPI={restAPI}
            />
            <div className={cx(
            { [bottomFilter]: true },
            { [overrideBottomFilter]: isBottomFilterThemeOverriden }
        )}>
                <SearchInput 
                    title={t('filter live search title')}
                    placeholder={t('filter live search placeholder')}
                />
                <GenderSelection 
                    title={t('filter gender selector title')}
                    radios={[
                        t('filter gender female'),
                        t('filter gender male'),
                        t('filter gender both')
                    ]}
                />
            </div> */}
        </div>        
=======
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay className={cssDrawerOverlay} />
                <DrawerContent className={cssDrawerContent}>
                    <DrawerCloseButton />

                    <DrawerBody>

                        <SwiperWithFilters
                            title={t('filter slider title')}
                            restAPI={restAPI}
                        />

                        <div className={cssBottomFilters}>
                            <SearchInput
                                title={t('filter live search title')}
                                placeholder={t('filter live search placeholder')}
                            />
                            <GenderSelection
                                title={t('filter gender selector title')}
                                radios={[
                                    t('filter gender female'),
                                    t('filter gender male'),
                                    t('filter gender both')
                                ]}
                            />
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
>>>>>>> a42be11c0e3fdd6a83dd0695018fb37ec8d8eebc
    )
};

export default Filter;