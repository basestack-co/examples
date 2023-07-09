import logo from "./logo.svg";
// BaseStack Flags SDK
import { useFlag } from "@basestack/flags-react-sdk";

const Header = () => {
  const { enabled } = useFlag("header");

  if (!enabled) return null;

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <p>BaseStack React Flags SDK</p>
      </section>
    </div>
  );
}

export default App;
