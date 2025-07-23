import { fetchMessages } from "../lib/api";
import { ChatMessage } from "./chat-message";
import useSWR from "swr";
import { useAtom } from "jotai";
import { activeDiscussionAtom } from "../store/store";

export function ChatMessageList() {
  const [activeDiscussion] = useAtom(activeDiscussionAtom);
  const { data: messages } = useSWR(
    () => `messages ${activeDiscussion?.id}`,
    () => fetchMessages(activeDiscussion.id),
    { dedupingInterval: 10000 }
  );

  return (
    <div>
      {messages?.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
