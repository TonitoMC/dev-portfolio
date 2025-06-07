import Layout from "./components/Layout/Layout";
import { dockApps } from "./constants/dockApps";
import { pageApps } from "./constants/pageApps";
import TilingLayout from "./components/TilingLayout/TilingLayout";
import useDisplayedPages from "./hooks/useDisplayedPages";

function App() {
  const [displayedPages, openPage, closePage, togglePage] = useDisplayedPages(["welcome"]);

  return (
    <Layout dockApps={dockApps} onAppSelect={togglePage}>
      <TilingLayout pageKeys={displayedPages}>
        {displayedPages.map((key) => {
          const app = pageApps.find((a) => a.key === key);
          if (!app || !app.component) return null;
          const PageComponent = app.component;
          return (
            <PageComponent
              key={key}
              onClose={() => closePage(key)}
            />
          );
        })}
      </TilingLayout>
    </Layout>
  );
}

export default App;
