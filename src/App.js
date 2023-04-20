import React from 'react';
import { useSelector } from 'react-redux';
import { injectGlobal } from '@emotion/css';
import Filter from './features/filter/Filter';
import View from './features/view/View';
import { fontsLoader } from './themes';

function App() {
  const locale = useSelector(state => state.common.locale);
  const theme = useSelector(state => state.common.theme);

  let fl = fontsLoader(theme);
  console.log(fl);
  
injectGlobal`${fl}`;

  return (
    <div className="nbs-naming-tool-container">
      <Filter />
      {/* <View locale={locale} /> */}
    </div>
  );
}

export default App;