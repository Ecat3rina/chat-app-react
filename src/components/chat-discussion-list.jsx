import { AiFillDelete } from "react-icons/ai";
import { clsx } from "clsx";
import { useAtom } from "jotai";
import useSWR, { mutate } from "swr";

import { activeDiscussionAtom } from "../store/store";
import { deleteDiscussion, fetchDiscussions } from "../lib/api";
import { ChatDiscussionContacts } from "./chat-discussion-contacts";

export function ChatDiscussionList() {
  const [activeDiscussion, setActiveDiscussion] = useAtom(activeDiscussionAtom);

  const { data: discussions } = useSWR("discussions", fetchDiscussions);

  async function handleDeleteDiscussion(id) {
    const { error } = await deleteDiscussion(id);

    if (error) {
      // Poti arata o alerta daca stergerea nu a mers cum trebuie
      // Dupa dau return ca sa nu se faca mutate inutil
      return;
    }

    mutate("discussions");
  }

  return (
    <div className="">
      <h3 className="text-g text-xl">My discussions</h3>

      <ul className="">
        {discussions?.map((discussion) => (
          <li
            key={discussion.id}
            className="mt-3 flex items-stretch justify-between rounded-md border-1"
          >
            <button
              className={clsx(
                "flex grow p-2 hover:bg-gray-100",
                discussion.id === activeDiscussion?.id && "bg-blue-200",
              )}
              onClick={() => {
                setActiveDiscussion(discussion);
              }}
            >
              <ChatDiscussionContacts contacts={discussion.contacts} />
            </button>

            <button
              className="px-4 hover:bg-red-100"
              onClick={() => handleDeleteDiscussion(discussion.id)}
            >
              <AiFillDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
