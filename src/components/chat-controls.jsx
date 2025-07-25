import { clsx } from "clsx";
import { useAtom } from "jotai";
import { isModalVisibleAtom, userAtom } from "../store/store";

export function ChatControls() {
  const [user] = useAtom(userAtom);
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom);

  return (
    <div className="chat-controls">
      <button
        className={clsx("chat-controls-btn", !isModalVisible && "is-active")}
        onClick={() => {
          setIsModalVisible(false);
        }}
      >
        Hide contact list
      </button>

      <button
        className={clsx("chat-controls-btn", isModalVisible && "is-active")}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Show contact list
      </button>

      <button
        className="chat-controls-btn"
        onClick={() => {
          setIsModalVisible((prev) => !prev);
        }}
      >
        Toggle contact list
      </button>

      <p>
        Current user: <strong>{user.name}</strong>
      </p>
    </div>
  );
}
