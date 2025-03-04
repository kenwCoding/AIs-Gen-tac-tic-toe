import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home/index.jsx"),
  {
    path: "/welcome",
    module: "routes/welcome.jsx"
  }
] satisfies RouteConfig;
