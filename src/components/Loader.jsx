const Loader = () => {
  return (
    <div className="flex items-center gap-3 text-white text-lg font-medium">
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" />
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-.2s]" />
      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce [animation-delay:-.4s]" />
      <span className="ml-4 text-gray-900">Loading results …</span>
    </div>
  );
};

export default Loader;