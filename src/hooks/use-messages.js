import { useEffect, useState } from "react";
import { fetchMessages } from "../lib/api";

export function useMessages({ discussions, setDiscussions }) {
  const [messages, setMessages] = useState([]);

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

  return { messages, loadMessages, highlightDiscussion };
}
