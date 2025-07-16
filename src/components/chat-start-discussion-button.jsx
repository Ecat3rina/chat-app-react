export function ChatStartDiscussionButton({
  addNewDiscussion,
  setIsModalVisible,
}) {
  return (
    <button
      onClick={() => {
        addNewDiscussion(), setIsModalVisible(false);
      }}
    >
      Start discussion
    </button>
  );
}
