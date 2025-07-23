import { postDiscussion } from "../lib/api";
import { useSWRConfig } from "swr";
import { useAtom } from "jotai";
import {
  userAtom,
  activeContactAtom,
  isModalVisibleAtom,
} from "../store/store";

export function ChatStartDiscussionButton() {
  const [activeContact] = useAtom(activeContactAtom);
  const [user] = useAtom(userAtom);
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom);

  const { mutate } = useSWRConfig();
  async function startNewDiscussion() {
    const payload = {
      contacts: [
        { id: activeContact, name: activeContact.name },
        { id: user.id, name: user.name },
      ],
    };

    const { error } = await postDiscussion(payload);
    if (error) {
    }

    mutate("discussions");
    setIsModalVisible(false);
  }

  return (
    <button
      onClick={() => {
        startNewDiscussion();
      }}
    >
      Start discussion
    </button>
  );
}
