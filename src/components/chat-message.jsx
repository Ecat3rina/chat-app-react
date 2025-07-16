export function ChatMessage({ message }) {
  return (
    <div>
      <p>{message.author}</p>
      <p>{message.date}</p>
      <p>{message.value}</p>
    </div>
  );
}
