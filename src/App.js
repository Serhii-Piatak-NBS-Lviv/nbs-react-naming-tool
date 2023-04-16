import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './features/filter/Filter';
import View from './features/view/View';

function App() {
  const locale = useSelector(state => state.common.locale);
  const theme = useSelector(state => state.common.theme);

  return (
    <div className="nbs-naming-tool-container">
      <Filter locale={locale} themeName={theme} />
      <View locale={locale} themeName={theme} />
    </div>
  );
}

export default App;