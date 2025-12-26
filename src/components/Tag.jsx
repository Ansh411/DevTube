
const Tag = ({ name, active = false }) => {
  return (
    <button className={`shrink-0 px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-200
        ${active ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
      {name}
    </button>
  );
};

export default Tag;
