import { useDispatch, useSelector } from 'react-redux';

import { setSpecificName } from './filterSlice';

const SearchInput = ({title}) => {
    const dispatch = useDispatch();
    console.log(useSelector(state => state.filter.specificName));

  return (
    <div>
        <p>{title}</p>
        <input 
          type="text" 
          onChange={(e) => dispatch(setSpecificName(e.target.value))}
        />
    </div>
  )
}

export default SearchInput;
