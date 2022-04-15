import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes, onRouteBefore } from "./router";
import { transformRoutes, setRouteBefore } from "./components/RouterGuard/fn";

export default function App() {
  setRouteBefore(onRouteBefore);
  return useRoutes(transformRoutes(routes));
}
