import { useEffect, useState } from "react";
import { fetchContacts } from "../lib/api";

export function useContacts() {
  const [contacts, setContacts] = useState([]);

  async function loadContacts() {
    setContacts(await fetchContacts());
  }

  useEffect(() => {
    loadContacts();
  }, []);

  return { contacts };
}
