import { ChatContact } from "./chat-contact";

export function ChatContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li>
            <ChatContact contact={contact} key={contact.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
