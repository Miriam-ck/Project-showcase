import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Personal Project Showcase App</h1>
      </Link>
    </header>
  );
}
