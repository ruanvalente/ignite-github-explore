import "../styles/repository.scss";

export function RepositoryItem({ repositories }) {
  return repositories.map((repository) => (
    <>
      <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>

        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          Repository acess
        </a>
      </li>
    </>
  ));
}
