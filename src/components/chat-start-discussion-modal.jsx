import { ChatContactList } from "./chat-contact-list";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button";

export function ChatStartDiscussionModal({ setIsModalVisible, contacts }) {
  return (
    <div className="chat-modal">
      <ChatContactList contacts={contacts} />
      <ChatStartDiscussionButton />
      <button
        className="chat-modal-close-btn"
        onClick={() => setIsModalVisible(false)}
      >
        Close
      </button>
    </div>
  );
}
