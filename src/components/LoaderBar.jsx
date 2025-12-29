const LoaderBar = ({ loading }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 z-50 bg-red-600 transition-all duration-500 ease-out
        ${loading ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"} origin-left`}
    />
  );
};

export default LoaderBar;
