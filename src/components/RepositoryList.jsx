import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "React",
  description: "Description",
  link: "",
};

export function RespositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
}
