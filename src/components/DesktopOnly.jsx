const DesktopOnly = ({ children }) => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block min-h-screen">
        {children}
      </div>

      {/* Mobile / Tablet */}
      <div className="flex lg:hidden min-h-screen items-center justify-center bg-black text-white px-6">
        <img src="https://media.tenor.com/KVu2fd8SSY4AAAAi/no-move.gif" className="w-36" alt="Desktop GIF" />
        <div className="text-center animate-pulse">
          <h1 className="text-xl font-bold">
            Desktop Only Website
          </h1>
          <p className="text-gray-400 mt-2">
            Please open this site on a laptop or desktop
          </p>
        </div>
      </div>
    </>
  );
};

export default DesktopOnly;
