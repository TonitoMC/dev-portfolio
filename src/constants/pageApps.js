import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import FAQ from "../pages/FAQ/FAQ";
import Welcome from "../pages/Welcome/Welcome";
import { dockApps } from "./dockApps";

// Add Welcome first, then spread all dockApps (even if some lack a component)
export const pageApps = [
  { key: "welcome", component: Welcome },
  ...dockApps,
];
