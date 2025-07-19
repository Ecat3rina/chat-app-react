import { clsx } from "clsx";
import { useChatContext } from "@hooks/use-chat-context";

export function ChatControls() {
  const { isModalVisible, setIsModalVisible, user } = useChatContext();
  return (
    <div className="chat-controls">
      <button
        className={clsx("chat-controls-btn", isModalVisible && "is-active")}
        onClick={() => setIsModalVisible((prev) => !prev)}
      >
        Show modal
      </button>
      <p>
        <strong>Current user:{user.name}</strong>
      </p>
    </div>
  );
}
