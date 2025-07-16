const API_BASE = "http://localhost:3000";

export async function fetchDiscussions() {
  const endpoint = "discussions";
  const res = await fetch(`${API_BASE}/${endpoint}`);
  return await res.json();
}

export async function fetchContacts() {
  const endpoint = "contacts";
  const res = await fetch(`${API_BASE}/${endpoint}`);
  return await res.json();
}

export async function fetchMessages() {
  const endpoint = "messages";
  const res = await fetch(`${API_BASE}/${endpoint}`);
  return await res.json();
}
