import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../../store/chatSlice";
import { generateRandomNames, getRandomChatMessage } from "../../utils/helpers";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    // API Polling (dummy)
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: getRandomChatMessage(),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col h-192 w-full">
      
      
      <div className={`sticky top-0 z-10 flex items-center gap-2 px-4 py-3 ${isDark ? "bg-[#121212] border-gray-700" : "bg-white"} border-b rounded-t-lg`}>
        
        
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
        </span>

        <h1 className={`text-sm font-semibold tracking-wide ${isDark ? "text-gray-100" : "text-black"}`}>
          Live Chat
        </h1>

        <span className={`ml-auto text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Top chat
        </span>
      </div>
     
      <div className={`flex-1  ${isDark ? "bg-[#0f0f0f]" : "bg-zinc-50"} px-3 py-2 overflow-y-scroll no-scrollbar flex flex-col rounded-b-lg`}>
        <div className="space-y-2">
          {chatMessages.map((c, idx) => (
            <ChatMessage key={idx} name={c.name} message={c.message}/> 
          ))}
        </div>
      </div>
     
      <form
        className={`border-t ${isDark && "border-gray-700"} px-3 py-2 flex items-center gap-2`}
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;

          dispatch(
            addMessage({
              name: "User411",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Chat..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className={`flex-1 px-4 py-2 text-sm rounded-full border ${isDark ? "border-gray-700 text-white bg-[#121212]" : "border-gray-300 text-black bg-white"}
            focus:outline-none focus:ring-2 focus:ring-emerald-300`}
        />

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-lime-600 text-white text-sm font-medium hover:bg-green-700 transition cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

