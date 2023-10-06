import Layout from "./components/Layout/Layout";
import ModalContextProvider from "./contexts/ModalContext";

const App = () => {
  return (
    <div className="App font-kumbh">
      <ModalContextProvider>
        <Layout />
      </ModalContextProvider>
    </div>
  );
};

export default App;
