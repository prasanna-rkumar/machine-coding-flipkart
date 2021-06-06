import { useContext } from "react";
import { AppContext } from "../../AppContext";

const Sorting = () => {
  const { currentSort, sort } = useContext(AppContext);
  return (
    <div className="flex flex-row gap-x-4 items-stretch">
      <span className=" font-semibold">Sort By</span>
      {['High to Low', 'Low to High'].map((option) => (
        <div key={option} onClick={() => sort(option)} className={`text-sm cursor-pointer ${currentSort === option && 'text-blue-500  font-medium border-b border-blue-500'} self-end`}>{option}</div>
      ))}
    </div>
  );
};

export default Sorting;
