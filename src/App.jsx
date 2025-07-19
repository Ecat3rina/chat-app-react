import "./App.css";
import { ChatControls } from "@components/chat-controls";
import { ChatDiscussionList } from "@components/chat-discussion-list";
import { ChatLayout } from "@components/chat-layout";
import { ChatMessageList } from "@components/chat-message-list";
import { ChatStartDiscussionModal } from "@components/chat-start-discussion-modal";
import { ChatProvider } from "@store/chat-context";

function App() {
  return (
    <ChatProvider>
      <ChatStartDiscussionModal />

      <ChatLayout
        controls={<ChatControls />}
        aside={<ChatDiscussionList />}
        main={<ChatMessageList />}
      />
    </ChatProvider>
  );
}

export default App;
