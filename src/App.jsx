import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectDetail from "./components/ProjectDetail";

const initialProjects = [
  { id: 1, title: "Project 1", description: "Description of the project" },
  { id: 2, title: "Project 2", description: "Description of the project" },
  { id: 3, title: "Project 3", description: "Description of the project" },
];

export default function App() {
  // State lives here because several children need it
  const [projects, setProjects] = useState(initialProjects);
  const [query, setQuery] = useState("");

  const addProject = (title, description) => {
    setProjects((prev) => [...prev, { id: Date.now(), title, description }]);
  };

  // Filter on every render so results update as the user types
  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <ProjectForm onAdd={addProject} />
              <section className="card">
                <SearchBar query={query} onChange={setQuery} />
                <ProjectList projects={filtered} />
              </section>
            </main>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </div>
  );
}
