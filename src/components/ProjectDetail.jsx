import { useParams, Link } from "react-router-dom";

export default function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <p className="empty">Project not found. <Link to="/">Back</Link></p>;
  }

  return (
    <section className="card">
      <h2>{project.title}</h2>
      <p>{project.description || "No description provided."}</p>
      <Link to="/">← Back to projects</Link>
    </section>
  );
}
