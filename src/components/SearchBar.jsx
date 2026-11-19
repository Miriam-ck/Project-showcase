export default function SearchBar({ query, onChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search Projects"
      aria-label="Search Projects"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
