import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { YOUTUBE_COMMENTS_API } from "../../utils/constants";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";

/* ---------------- Comment Text (HTML SAFE) ---------------- */

const CommentText = ({ text , isDark }) => {
  return (
    <span
      className={` ${isDark ? "text-gray-300" : "text-gray-800"} text-sm leading-relaxed`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};


const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(YOUTUBE_COMMENTS_API(videoId));
        const json = await res.json();

        if (json?.items) {
          setComments(json.items);
        }
      } catch (err) {
        console.error("Comments fetch failed", err);
      }
    };

    if (videoId) fetchComments();
  }, [videoId]);

  return (
    <div className="mt-10">
      <h2 className={`text-lg font-semibold mb-6 ${isDark ? "text-white" : "text-black"}`}>
        {comments.length} Comments
      </h2>

      <div className="space-y-8">
        {comments.map((item) => {
          const top = item.snippet.topLevelComment.snippet;
          const replies = item.replies?.comments || [];

          return (
            <div key={item.id} className="relative">
              {/* TOP LEVEL COMMENT */}
              <div className="flex gap-4">
                <Avatar img={top.authorProfileImageUrl} />

                <div>
                  <p className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-black"}`}>
                    {top.authorDisplayName}
                  </p>
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-800"} mt-1`}>
                    <CommentText text={top.textDisplay} isDark={isDark} />
                  </p>

                  <div className={`flex items-center gap-6 text-xs  ${isDark ? "text-gray-400" : "text-gray-500"} mt-2`}>
                    <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}><AiOutlineLike className="text-[15px]"/></button>
                    <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}><AiOutlineDislike className="text-[15px]"/></button>
                    <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}>Reply</button>
                  </div>
                </div>
              </div>

              {/* VERTICAL CONNECTOR LINE */}
              {replies.length > 0 && (
                <div className={`absolute left-5 top-14 bottom-0 border-l ${isDark ? "border-gray-700" : "border-gray-300"}`}></div>
              )}

              {/* REPLIES */}
              {replies.length > 0 && (
                <div className="mt-4 ml-14 space-y-5">
                  {replies.map((reply) => {
                    const r = reply.snippet;

                    return (
                      <div key={reply.id} className="flex gap-3">
                        <Avatar img={r.authorProfileImageUrl} small />

                        <div className="flex-1">
                          <p className={`text-xs font-semibold ${isDark ? "text-gray-200" : "text-black"}`}>
                            {r.authorDisplayName}
                          </p>
                          <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}  mt-1`}>
                            <CommentText text={r.textDisplay} isDark={isDark} />
                          </p>

                          <div className="flex items-center gap-6 text-xs text-gray-500 mt-2">
                            <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}><AiOutlineLike className="text-[15px]"/></button>
                            <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}><AiOutlineDislike className="text-[15px]"/></button>
                            <button className={` ${isDark ? "hover:text-white" : "hover:text-black"} flex items-center gap-1 cursor-pointer`}>Reply</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default Comments;

