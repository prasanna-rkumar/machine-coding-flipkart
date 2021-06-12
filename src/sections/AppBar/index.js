import { Link } from "react-router-dom"

const AppBar = () => {
  return (
    <div className="h-14 sticky top-0 bg-blue-600 w-full flex items-center justify-between px-4">
      <h1 className="text-white font-medium text-lg">
        <Link to="/">Flipkart</Link>
      </h1>
      <Link to="/cart">
        <button className="bg-white bg-opacity-90 rounded-xl px-2 text-blue-600 font-medium">
          Cart
        </button>
      </Link>
    </div>
  );
};

export default AppBar;
