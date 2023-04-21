import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';
import { Radio, RadioGroup } from '@chakra-ui/react';

import { setGender } from './filterSlice';

const GenderSelection = ({ title }) => {
  const dispatch = useDispatch();

  const [wrapper, overrideWrapper, isWrapperOverriden] = useThemify('filter-gender-section');
  const [mainTitle, overrideMainTitle, isMainTitleOverriden] = useThemify('filter-gender-section-title');

  const selectedGender = useSelector((state) => state.filter.gender);

  

  const handleRadio = (radio) => {
    dispatch(setGender(radio));  
  };

  console.log(selectedGender);

  return (
    <div className={cx(
      { [wrapper]: true },
      { [overrideWrapper]: isWrapperOverriden }
    )}>
      <p className={cx(
        { [mainTitle]: true },
        { [overrideMainTitle]: isMainTitleOverriden }
    )}>{title}</p>
      <div>
        <RadioGroup onChange={handleRadio} value={selectedGender}>
          <Radio value='1'>First</Radio>
          <Radio value='2'>Second</Radio>
          <Radio value='3'>Third</Radio>
        </RadioGroup>
      </div>
    </div>
  );
};

export default GenderSelection;