import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import FILTERS from '../../FILTERS'

const SideBar = () => {
  const { currentFilters, filter, clearFilters } = useContext(AppContext);
  return (
    <div style={{ minWidth: 200 }} className="p-3 bg-white">
      <div className="flex justify-between items-baseline">
        <h3 className="text-lg font-semibold">Filters</h3>
        <span onClick={() => clearFilters()} className="text-xs cursor-pointer tracking-tight font-medium text-blue-500 uppercase">clear all</span>
      </div>
      <div>
        {Object.keys(FILTERS).map((key) => {
          return (
            <div className="flex flex-col border-b border-t border-gray-300 py-3" key={key}>
              <span className="font-semibold uppercase px-2">{key}</span>
              <ul className="mb-4 px-2 mt-1">
                {FILTERS[key].map((option) => {
                  return (
                    <li key={option}>
                      <label className="flex gap-x-2.5 items-baseline">
                        <input
                          onChange={(e) => {
                            filter(key, option, e.target.checked)
                          }}
                          checked={currentFilters[key].indexOf(option) > -1}
                          type="checkbox"
                        />
                        {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
