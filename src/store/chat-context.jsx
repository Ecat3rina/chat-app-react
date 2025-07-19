import { createContext } from "react";
import { useState } from "react";
import { useContacts } from "@hooks/use-contacts";
import { useDiscussions } from "@hooks/use-discussions";
import { useMessages } from "@hooks/use-messages";
import { USER } from "@constants/user";

export const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeContact, setActiveContact] = useState(null);
  const [user] = useState(USER);
  const { contacts } = useContacts();
  const { discussions, setDiscussions, addNewDiscussion } = useDiscussions({
    user,
    activeContact,
  });
  const { messages, loadMessages, highlightDiscussion } = useMessages({
    discussions,
    setDiscussions,
  });

  return (
    <ChatContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        activeContact,
        setActiveContact,
        user,
        contacts,
        discussions,
        setDiscussions,
        messages,
        addNewDiscussion,
        loadMessages,
        highlightDiscussion,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
