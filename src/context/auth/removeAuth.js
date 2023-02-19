import { history } from "./history";

export const RemoveAuth = () => {
  localStorage.clear();
  history.push("/login");
};
