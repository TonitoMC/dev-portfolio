import Dock from "./Dock";

const apps = [
  {
    key: "terminal",
    label: "Terminal",
    iconPath: "/images/terminal.svg",
  },
  {
    key: "notepad",
    label: "Notepad",
    iconPath: "/images/notepad.svg",
  },
];

export default {
  title: "Components/Dock",
  component: Dock,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "var(--nord0, #222)",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => (
  <Dock
    apps={apps}
    onAppSelect={(app, idx) => alert(`Clicked: ${app.label}`)}
  />
);
