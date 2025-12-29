import { avatars } from "../../assets/avatars";

const getRandomAvatar = () => {
  return avatars[Math.floor(Math.random() * avatars.length)];
};

const ChatMessage = ({ name, message }) => {
  const avatar = getRandomAvatar();

  return (
    <div className="flex items-start gap-2 py-1.5 px-1 hover:bg-gray-50 rounded-lg transition cursor-pointer">

      <img
        src={avatar}
        alt="user"
        className="h-8 w-8 rounded-full object-cover mt-0.5"
      />

      <div className="flex flex-col">
        <span className="text-xs font-semibold text-gray-800 leading-none">
          {name}
        </span>

        <span className="text-sm text-gray-700 leading-snug wrap-break-word max-w-65">
          {message}
        </span>
      </div>

    </div>
  );
};

export default ChatMessage;
