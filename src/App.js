import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { injectGlobal } from '@emotion/css';
import { useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Filter from './features/filter/Filter';
import View from './features/view/View';
import { fontsLoader } from './themes';
import { fetchData } from './app/fetchApi';
import { addPetName } from './features/view/viewSlice';
import { addCategory } from './features/filter/filterSlice';

function App() {
  const locale = useSelector(state => state.common.locale);
  const theme = useSelector(state => state.common.theme);
  const ctgURL = useSelector(state => state.common.categoriesOrigin);
  const nameURL = useSelector(state => state.common.namesOrigin);
  const categories = useQuery(['petNameCategories'], () => fetchData(ctgURL));
  const names = useQuery(['petNames'], () => fetchData(nameURL));
  const dispatch = useDispatch();

  let fl = fontsLoader(theme);
  
  injectGlobal`${fl}`;

  useEffect(() => {
    if (names.data) { names.data.map((name) => dispatch(addPetName(name))) };
    if (categories.data) { categories.data.map((category) => dispatch(addCategory(category))) };
  }, [names.data, categories.data])


  return (
    <div className="nbs-naming-tool-container">
      <Filter categoriesLoaded={categories.isLoading} namesLoaded={names.isLoading} />
      <View />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;