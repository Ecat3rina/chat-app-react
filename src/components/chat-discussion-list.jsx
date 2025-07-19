import { useChatContext } from "@hooks/use-chat-context";
import { ChatDiscussionContacts } from "./chat-discussion-contacts";
import { clsx } from "clsx";

export function ChatDiscussionList() {
  const { discussions, loadMessages, highlightDiscussion, contacts } =
    useChatContext();

  return (
    <div className="chat-discussion-list">
      <h3>My discussions</h3>

      <ul className="chat-discussion-list-items">
        {discussions.map((discussion) => (
          <li key={discussion.id} className="chat-discussion-list-item">
            <button
              className={clsx(
                "chat-discussion-list-btn",
                discussion.isActive && "is-active"
              )}
              onClick={() => {
                loadMessages(discussion.id);
                highlightDiscussion(discussion.id);
              }}
            >
              <ChatDiscussionContacts contacts={discussion.contacts} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
