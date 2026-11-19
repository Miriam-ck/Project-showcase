import { useState } from "react";

export default function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <label htmlFor="title">Title</label>
      <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      {error && <p className="error" role="alert">{error}</p>}
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
