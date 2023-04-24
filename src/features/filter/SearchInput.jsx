import { useDispatch, useSelector } from 'react-redux';
import { cx } from '@emotion/css';
import useThemify from '../../app/hooks/useThemify';

import { setSpecificName } from './filterSlice';

const SearchInput = ({title, placeholder}) => {
    const dispatch = useDispatch();
    console.log(useSelector(state => state.filter.specificName));

    const [wrapper, overrideWrapper, isWrapperOverriden] = useThemify('filter-searchInput-wrapper');
    const [inputTitle, overrideInputTitle, isInputTitleOverriden] = useThemify('filter-input-title');
    const [inputContainer, overrideInputContainer, isInputContainerOverriden] = useThemify('filter-input-container');
    const [input, overrideInput, isInputOverriden] = useThemify('filter-input-search');

  return (
    <div className={cx(
      { [wrapper]: true },
      { [overrideWrapper]: isWrapperOverriden }
    )}>
        <p className={cx(
          { [inputTitle]: true },
          { [overrideInputTitle]: isInputTitleOverriden }
        )}>
          {title}
        </p>
        <div className={cx(
          { [inputContainer]: true },
          { [overrideInputContainer]: isInputContainerOverriden }
        )}>
          <input className={cx(
            { [input]: true },
            { [overrideInput]: isInputOverriden }
          )}
            type="text" 
            placeholder={placeholder}
            onChange={(e) => dispatch(setSpecificName(e.target.value))}
          />
        </div>        
    </div>
  )
}

export default SearchInput;
