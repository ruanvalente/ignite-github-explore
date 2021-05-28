import { useEffect, useState } from "react";
import { RepositoryState } from "../types/repositoryState";

import { RepositoryItem } from "./RepositoryItem";

export function RespositoryList() {
  const [repository, setRepository] = useState<RepositoryState[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ruanvalente/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repository.map((repository) => (
          <RepositoryItem key={repository.id} repositories={repository} />
        ))}
      </ul>
    </section>
  );
}
