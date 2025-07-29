import { useAtom } from "jotai";
import { userAtom } from "../store/store";
import { Avatar } from "@nextui-org/react";
import { ChatToggleContacts } from "./chat-toggle-contacts";

export function ChatControls() {
  const [user] = useAtom(userAtom);

  return (
    <header className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3">
      <Avatar
        name={user.name}
        src={user.imgUrl}
        showFallback
        radius="md"
        size="lg"
      ></Avatar>
      <p>
        Welcome <strong>{user.name}</strong>
      </p>
      <ChatToggleContacts />
    </header>
  );
}
