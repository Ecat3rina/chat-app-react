import { useChatContext } from "@hooks/use-chat-context";
import { ChatContact } from "./chat-contact";
import { clsx } from "clsx";

export function ChatContactList() {
  const { contacts, activeContact, setActiveContact } = useChatContext();

  return (
    <div>
      <h2>My contact list</h2>
      <ul className="chat-contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="chat-contact-list-item">
            <ChatContact contact={contact} />
            <button
              className={clsx(
                "chat-contact-list-select",
                contact.id === activeContact?.id && "is-active"
              )}
              onClick={() => setActiveContact(contact)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
