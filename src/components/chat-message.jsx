import { useAtom } from "jotai";

import { userAtom } from "../store/store";
import clsx from "clsx";

export function ChatMessage({ message }) {
  const [user] = useAtom(userAtom);
  const isCurrentUser = user.name === message.author;

  return (
    <div
      className={clsx(
        isCurrentUser ? "flex flex-row-reverse pr-[20%]" : "pl-[20%]",
      )}
    >
      <div className="w-full max-w-[55%]">
        <div
          className={clsx(
            "leading-1.5 mt-8 rounded-md p-4",
            isCurrentUser ? "bg-blue-200" : "bg-green-200",
          )}
        >
          <p>{message.value}</p>
        </div>
        <div className="mt-1 flex justify-between px-2 text-sm text-gray-400">
          <p
            className={clsx(
              isCurrentUser ? "text-blue-500" : "text-green-500",
              "font-semibold",
            )}
          >
            {isCurrentUser ? "Me" : message.author}
          </p>
          <p>{message.date}</p>
        </div>
      </div>
    </div>
  );
}
