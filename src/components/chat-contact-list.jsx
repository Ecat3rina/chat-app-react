import useSWR from "swr";
import { useAtom } from "jotai";
import { ChatContact } from "./chat-contact";
import { fetchContacts } from "../lib/api";
import { activeContactAtom } from "../store/store";
import {
  Avatar,
  RadioGroup,
  VisuallyHidden,
  cn,
  useRadio,
} from "@nextui-org/react";

const CustomRadio = (props) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex flex-row-reverse items-center justify-between tap-highlight-transparent hover:opacity-70 active:opacity-50",
        "cursor-pointer gap-4 rounded-lg border-2 border-default p-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};

export function ChatContactList() {
  const [activeContact, setActiveContact] = useAtom(activeContactAtom);
  const { data: contacts } = useSWR("contacts", fetchContacts);

  return (
    <RadioGroup value={activeContact?.name || ""}>
      {contacts?.map((contact) => (
        <CustomRadio
          key={contact.id}
          value={contact.name}
          onChange={() => setActiveContact(contact)}
        >
          <div className="flex items-center gap-4">
            <Avatar color="default" src={contact.imgUrl}>
              <ChatContact contact={contact}></ChatContact>
            </Avatar>
          </div>
        </CustomRadio>
      ))}
    </RadioGroup>
  );
}
