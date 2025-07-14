import { ChatContact } from "./chat-contact";

export function ChatContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ChatContact contact={contact} />
      ))}
    </div>
  );
}
