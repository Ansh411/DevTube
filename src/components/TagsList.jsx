import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Tag from "./Tag";
import { Tags } from "../utils/constants";



const TagList = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* LEFT ARROW */}
      {showLeft && (
        <button onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md h-9 w-9 rounded-full cursor-pointer
                     flex items-center justify-center hover:bg-gray-100">
          <FaChevronLeft />
        </button>
      )}

      {/* TAG STRIP */}
      <div ref={scrollRef}
        onScroll={(e) => setShowLeft(e.target.scrollLeft > 0)}
        className="flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar px-12 py-3 w-full">
        {Tags.map((tag, index) => (
          <Tag key={tag} name={tag} active={index === 0} />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md h-9 w-9 rounded-full cursor-pointer
                   flex items-center justify-center hover:bg-gray-100">
        <FaChevronRight />
      </button>
    </div>
  );
};


export default TagList;
