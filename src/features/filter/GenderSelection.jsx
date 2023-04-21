import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from '@chakra-ui/react';

import { setGender } from './filterSlice';

const GenderSelection = ({ title }) => {
  const dispatch = useDispatch();
  const selectedGender = useSelector((state) => state.filter.gender);

  const handleRadio = (radio) => {
    dispatch(setGender(radio));  
  };

  console.log(selectedGender);

  return (
    <div>
      <p>{title}</p>
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