import { clsx } from "clsx";

export function ChatControls({ isModalVisible, setIsModalVisible, user }) {
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
