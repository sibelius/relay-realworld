import React from 'react';
import { RouterRenderer } from '@world/route';

import Providers from './Providers';

const App = () => {
  return (
    <Providers>
      <RouterRenderer />
    </Providers>
  );
};

export default App;
