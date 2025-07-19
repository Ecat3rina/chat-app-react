import { useEffect, useState } from "react";
import { fetchDiscussions, postDiscussion } from "../lib/api";

export function useDiscussions({ user, activeContact }) {
  const [discussions, setDiscussions] = useState([]);

  async function loadDiscussions() {
    setDiscussions(await fetchDiscussions());
  }

  async function addNewDiscussion() {
    const newDiscussionId = discussions.length + 1;
    const newDiscussion = {
      id: newDiscussionId,
      contacts: [
        {
          id: user.id,
          name: user.name,
        },
        {
          id: activeContact.id,
          name: activeContact.name,
        },
      ],
    };

    await postDiscussion(newDiscussion);
    const updatedDiscussions = [...discussions, newDiscussion];
    setDiscussions(updatedDiscussions);
  }

  useEffect(() => {
    loadDiscussions();
  }, []);

  return { discussions, setDiscussions, addNewDiscussion };
}
