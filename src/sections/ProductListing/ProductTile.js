const ProductTile = ({product}) => {
  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h6 className="text-sm font-medium text-gray-500">{product.brand}</h6>
      <div className="flex flex-row gap-x-2">
        <h3 className="text-sm leading-none truncate">{product.title}</h3>
        {product.isAssured && <img className="h-4" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="assured" />}
      </div>
      <div className="flex flex-wrap gap-x-2 items-baseline">
        <span className="font-medium ">₹{product.sellingPrice}</span>
        <span className="text-gray-500 text-sm line-through">₹{product.mrp}</span>
        <span className="text-green-500 text-sm font-semibold">{product.offer}%</span>
      </div>
    </div>
  );
};

export default ProductTile;
