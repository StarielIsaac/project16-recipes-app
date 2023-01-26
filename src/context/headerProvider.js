import { useMemo, useState } from 'react';
import HeaderContext from './hearderContext';

function HeaderProvider({ children }) {
  const [valueInputSearch, setValueInputSearch] = useState('');

  const values = useMemo(() => ({
    valueInputSearch, setValueInputSearch,
  }), [valueInputSearch, setValueInputSearch]);

  return (
    <HeaderContext.Provider value={ values }>
      { children }
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {}.isRequired;

export default HeaderProvider;
