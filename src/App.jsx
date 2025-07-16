import "./App.css";
import { ChatControls } from "@components/chat-controls";
import { ChatDiscussionList } from "@components/chat-discussion-list";
import { ChatLayout } from "@components/chat-layout";
import { ChatMessageList } from "@components/chat-message-list";
import { ChatStartDiscussionModal } from "@components/chat-start-discussion-modal";
import { use, useEffect, useState } from "react";
import { USER } from "@constants/user";
import { fetchContacts, fetchDiscussions, fetchMessages } from "./lib/api";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeContact, setActiveContact] = useState(null);
  const [user] = useState(USER);
  const [contacts, setContacts] = useState([]);

  async function loadMessages(discussionId) {
    const allMessages = await fetchMessages();
    const data = allMessages.find(
      (conversation) => conversation.discussionId === Number(discussionId)
    );
    setMessages(data?.messages);
    highlightDiscussion(discussionId);
  }

  function highlightDiscussion(discussionId) {
    const activeDiscussion = discussions.find(
      (discussion) => discussion.id === discussionId
    );

    function updateDiscussion(discussion) {
      return {
        ...discussion,
        isActive: discussion.id === activeDiscussion.id,
      };
    }

    const updatedDiscussions = discussions.map(updateDiscussion);
    setDiscussions(updatedDiscussions);
  }

  function addNewDiscussion() {
    const newDiscussionId = discussions.length + 1;
    const newDiscussion = {
      id: newDiscussionId,
      contacts: [
        {
          id: user.id,
          name: user.name,
        },
        {
          id: activeContact.id,
          name: activeContact.name,
        },
      ],
    };
    const updatedDiscussions = [...discussions, newDiscussion];
    setDiscussions(updatedDiscussions);
  }

  async function loadDiscussions() {
    setDiscussions(await fetchDiscussions());
  }

  async function loadContacts() {
    setContacts(await fetchContacts());
  }

  useEffect(() => {
    loadDiscussions(), loadContacts();
  }, []);

  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          setIsModalVisible={setIsModalVisible}
          contacts={contacts}
          setActiveContact={setActiveContact}
          addNewDiscussion={addNewDiscussion}
          activeContact={activeContact}
        />
      )}

      <ChatLayout
        controls={
          <ChatControls
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            user={user}
          />
        }
        aside={
          <ChatDiscussionList
            loadMessages={loadMessages}
            discussions={discussions}
            highlightDiscussion={highlightDiscussion}
          />
        }
        main={<ChatMessageList messages={messages} />}
      />
    </>
  );
}

export default App;
