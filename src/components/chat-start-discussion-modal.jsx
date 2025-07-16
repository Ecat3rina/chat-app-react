import { ChatContactList } from "./chat-contact-list";
import { ChatStartDiscussionButton } from "./chat-start-discussion-button";

export function ChatStartDiscussionModal({
  setIsModalVisible,
  contacts,
  setActiveContact,
  addNewDiscussion,
  activeContact,
}) {
  return (
    <div className="chat-modal">
      <h2>Select the people you want to talk to</h2>

      <ChatContactList
        contacts={contacts}
        setActiveContact={setActiveContact}
        activeContact={activeContact}
      />

      <ChatStartDiscussionButton
        addNewDiscussion={addNewDiscussion}
        setIsModalVisible={setIsModalVisible}
      />

      <button
        className="chat-modal-close-btn"
        onClick={() => setIsModalVisible(false)}
      >
        Close
      </button>
    </div>
  );
}
