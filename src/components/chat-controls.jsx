export function ChatControls({ isModalVisible, setIsModalVisible }) {
  return (
    <div className="chat-controls">
      <button
        className={`chat-controls-btn ${isModalVisible ? "is-active" : ""}`}
        onClick={() => setIsModalVisible((prev) => !prev)}
      >
        Show modal
      </button>
    </div>
  );
}
