import React from 'react';
import { AppProvider } from './AppContext';
import AppBar from './sections/AppBar';
import ProductListing from './sections/ProductListing';
import SideBar from './sections/SideBar';

const App = () => {
  return (
    <AppProvider>
      <AppBar />
      <div className="flex flex-row gap-x-4 px-3 overflow-auto mt-4">
        <SideBar />
        <ProductListing />
      </div>
    </AppProvider>
  );
}

export default App;
