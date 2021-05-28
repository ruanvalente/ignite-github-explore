import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "React",
  description: "Description",
  url: "",
};

export function RespositoryList() {
  const [repository, setRepository] = useState([]);
  console.log(repository);

  useEffect(() => {
    fetch("https://api.github.com/users/ruanvalente/repos")
      .then((response) => response.json())
      .then((data) => setRepository(data));
  }, []);
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repositories={repository} />
      </ul>
    </section>
  );
}
