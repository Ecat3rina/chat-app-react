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

export async function postDiscussion(payload) {
  const endpoint = 'discussions'
  const data = await fetch(`${API_BASE}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const newDiscussion = await data.json()

  return newDiscussion
}
