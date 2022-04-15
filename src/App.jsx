import "./App.css";
import React, { Component } from "react";
import { useRoutes } from "react-router-dom";
import { routes, onRouteBefore } from "./router";
import { transformRoutes, setRouteBefore } from "./components/RouterGuard/fn";

// export default class App extends Component {
//   render() {
//     return (
//       useRoutes(routes)
//     );
//   }
// }

export default function App() {
  setRouteBefore(onRouteBefore);

  return useRoutes(transformRoutes(routes));
}
