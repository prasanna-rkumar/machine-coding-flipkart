import { createContext, useEffect, useState } from 'react';
import products from './PRODUCTS'

export const AppContext = createContext();

const defaultFilters = {
  "size": [],
  "brand": [],
  "idealFor": []
}

export const AppProvider = ({ children }) => {

  const [listing, setListing] = useState([...products]);
  const [currentSort, setSort] = useState();

  const [filters, setFilters] = useState({ ...defaultFilters });

  useEffect(() => {
    let filtersCount = 0
    Object.keys(filters).forEach((field) => {
      if (filters[field].length === 0) {
        filtersCount += 1;
        return;
      };
      const x = products.filter((product) => {
        return filters[field].indexOf(product[field]) > -1;
      })
      setListing([...x])
    })
    if (filtersCount === 3) {
      setListing([...products])
    }
  }, [filters]);

  const sort = (sortOption) => {
    setSort(sortOption);
    setListing((prev) => {
      return prev.sort(
        (a, b) => sortOption === 'Low to High'
          ? a.sellingPrice - b.sellingPrice
          : b.sellingPrice - a.sellingPrice
      )
    })
  }

  const filter = (field, value) => {
    setFilters(prevState => {
      const prev = { ...prevState };
      const filterField = [...prev[field]]

      const index = filterField.indexOf(value);

      if (index > -1) {
        filterField.splice(index, 1);
      } else {
        filterField.push(value);
      }

      prev[field] = filterField;
      return prev;
    })
  }

  const clearFilters = () => setFilters({ ...defaultFilters })

  return (
    <AppContext.Provider value={{
      listing,
      currentSort,
      sort,
      currentFilters: filters,
      filter,
      clearFilters
    }}>
      {children}
    </AppContext.Provider>
  );
};
