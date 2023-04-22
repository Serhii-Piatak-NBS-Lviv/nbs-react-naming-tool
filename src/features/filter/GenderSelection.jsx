import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

import { setGender } from './filterSlice';

const GenderSelection = ({ title, radios }) => {
  const dispatch = useDispatch();

  const [wrapper, overrideWrapper, isWrapperOverriden] = useThemify('filter-gender-section');
  const [mainTitle, overrideMainTitle, isMainTitleOverriden] = useThemify('filter-gender-section-title');
  const [radioInput, overrideRadioInput, isRadioInputOverriden] = useThemify('filter-gender-input');
  const [radioLabel, overrideRadioLabel, isRadioLabelOverriden] = useThemify('filter-gender-label');

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
        {
          radios.map(titleInput => {
            return (
              <label className={cx(
                { [radioLabel]: true },
                { [overrideRadioLabel]: isRadioLabelOverriden }
              )}
                key={titleInput}
              >
                <input className={cx(
                  { [radioInput]: true },
                  { [overrideRadioInput]: isRadioInputOverriden }
                )}
                  type="radio"
                  name="titleInput"
                  value="titleInput"
                  checked={selectedGender === titleInput}
                  onChange={() => handleRadio(titleInput)}
                />
                {titleInput}
              </label>              
            )
          })
        }
      </div>
    </div>
  );
};

export default GenderSelection;