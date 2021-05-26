import "./styles/global.scss";

import { RespositoryList } from "./components/RepositoryList";
import { Counter } from "./components/Conuter";

export function App() {
  return (
    <>
      <RespositoryList />
      <Counter />
    </>
  );
}
