import { AppProvider } from "./context";
import { RoutesMain } from "./routes";

function App() {
  return (
    <>
      <AppProvider>
        <RoutesMain />
      </AppProvider>
    </>
  );
}

export default App;
