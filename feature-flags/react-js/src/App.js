// BaseStack Flags SDK
import { useFlag } from "@basestack/flags-react-sdk";

const Header = () => {
  const { enabled, payload } = useFlag("header");

  if (!enabled) return null;

  return <header style={{ backgroundColor: payload.color }}>Header</header>;
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
