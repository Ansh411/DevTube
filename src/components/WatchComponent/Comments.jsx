import { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { YOUTUBE_COMMENTS_API } from "../../utils/constants";
import Avatar from "./Avatar";

/* ---------------- Comment Text (HTML SAFE) ---------------- */

const CommentText = ({ text }) => {
  return (
    <div
      className="text-gray-800 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};


const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

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
      <h2 className="text-lg font-semibold mb-6">
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
                  <p className="text-sm font-semibold">
                    {top.authorDisplayName}
                  </p>
                  <p className="text-sm text-gray-800 mt-1">
                    <CommentText text={top.textDisplay} />
                  </p>

                  <div className="flex items-center gap-6 text-xs text-gray-500 mt-2">
                    <button className="hover:text-black flex items-center gap-1 cursor-pointer"><AiOutlineLike className="text-[15px]"/></button>
                    <button className="hover:text-black flex items-center gap-1 cursor-pointer"><AiOutlineDislike className="text-[15px]"/></button>
                    <button className="hover:text-black font-medium cursor-pointer">Reply</button>
                  </div>
                </div>
              </div>

              {/* VERTICAL CONNECTOR LINE */}
              {replies.length > 0 && (
                <div className="absolute left-5 top-14 bottom-0 border-l border-gray-300"></div>
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
                          <p className="text-xs font-semibold">
                            {r.authorDisplayName}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <CommentText text={r.textDisplay} />
                          </p>

                          <div className="flex items-center gap-6 text-xs text-gray-500 mt-2">
                            <button className="hover:text-black cursor-pointer"><AiOutlineLike className="text-[15px]"/></button>
                            <button className="hover:text-black cursor-pointer"><AiOutlineDislike className="text-[15px]"/></button>
                            <button className="hover:text-black cursor-pointer">Reply</button>
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

