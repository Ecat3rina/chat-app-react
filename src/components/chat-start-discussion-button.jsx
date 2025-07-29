import { postDiscussion } from "../lib/api";
import { useSWRConfig } from "swr";
import { useAtom } from "jotai";
import { userAtom, activeContactAtom } from "../store/store";
import { Button } from "@nextui-org/react";

export function ChatStartDiscussionButton({ onCloseModal }) {
  const [activeContact] = useAtom(activeContactAtom);
  const [user] = useAtom(userAtom);

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
    onCloseModal();
  }

  return (
    <Button
      color="primary"
      onPress={() => {
        startNewDiscussion();
      }}
    >
      Start discussion
    </Button>
  );
}
