import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ img, small }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const size = small ? "w-8 h-8" : "w-10 h-10";
  const iconSize = small ? "text-3xl" : "text-4xl";

  // If no image OR image failed → fallback icon
  if (!img || error) {
    return <FaUserCircle className={`${iconSize} text-gray-400`} />;
  }

  return (
    <div className={`${size} rounded-full overflow-hidden relative`}>
      {/* Placeholder while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full" />
      )}

      <img
        src={img}
        alt="user"
        className={`w-full h-full object-cover ${
          loaded ? "block" : "hidden"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default Avatar;
