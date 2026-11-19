import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <li className="project">
      <div className="thumb" aria-hidden="true">✕</div>
      <div>
        <h3>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}
