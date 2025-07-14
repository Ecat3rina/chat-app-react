import "./App.css";
import { ChatControls } from "@components/chat-controls";
import { ChatDiscussionList } from "@components/chat-discussion-list";
import { ChatLayout } from "@components/chat-layout";
import { ChatMessageList } from "@components/chat-message-list";
import { ChatStartDiscussionModal } from "@components/chat-start-discussion-modal";
import { useState } from "react";
import { CONTACTS } from "./constants/contacts";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contacts] = useState(CONTACTS);

  return (
    <>
      {isModalVisible && (
        <ChatStartDiscussionModal
          setIsModalVisible={setIsModalVisible}
          contacts={contacts}
        />
      )}
      <ChatLayout
        controls={
          <ChatControls
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        }
        aside={<ChatDiscussionList />}
        main={<ChatMessageList />}
      />
    </>
  );
}

export default App;
