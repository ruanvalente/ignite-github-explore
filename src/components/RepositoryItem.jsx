import "../styles/repository.scss";

export function RepositoryItem(props) {
  return (
    <>
      <li>
        <strong>{props.repositories.name}</strong>
        <p>{props.repositories.description}</p>

        <a
          href={props.repositories.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository acess
        </a>
      </li>
    </>
  );
}
