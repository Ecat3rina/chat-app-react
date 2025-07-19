import { useContext } from "react";
import { ChatContext } from "@store/chat-context";

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) throw new Error("error getting chat context");
  return context;
}
