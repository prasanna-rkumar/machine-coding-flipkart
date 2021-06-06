import { useContext } from "react";
import { AppContext } from "../../AppContext";
import ProductTile from "./ProductTile";
import Sorting from "./Sorting";

const ProductListing = () => {
  const { listing } = useContext(AppContext);
  return (
    <div className="bg-white p-2 w-full">
      <Sorting />
      <div className="grid grid-cols-4 gap-x-2 mt-2">
        {listing.map((product) => (
          <ProductTile key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
