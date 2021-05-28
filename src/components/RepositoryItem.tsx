import "../styles/repository.scss";

import { RepositoryItemProps } from "../types/repositoryItemProps";

export function RepositoryItem({ repositories }: RepositoryItemProps) {
  return (
    <>
      <li>
        <strong>{repositories.name}</strong>
        <p>{repositories.description}</p>

        <a
          href={repositories.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository acess
        </a>
      </li>
    </>
  );
}
