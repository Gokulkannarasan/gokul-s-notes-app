const API_URL = "http://localhost:5000";

export const fetchNotes = async () => {
  const response = await fetch(`${API_URL}/notes`);
  return await response.json();
};

export const addNote = async (note) => {
  const response = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ note }),
  });
  return await response.json();
};

export const deleteNote = async (id) => {
  const response = await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
