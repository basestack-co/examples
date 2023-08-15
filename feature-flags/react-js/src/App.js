// BaseStack Flags SDK
import {
  useFlag,
  useFlagAsync,
  Flag,
  FlagAsync,
} from "@basestack/flags-react-sdk";

const Header = () => {
  const { enabled, payload } = useFlag("header_v2");

  if (!enabled) return null;

  return <header style={{ backgroundColor: payload.color }}>Header</header>;
};

const Footer = () => {
  const footerFlag = useFlag("footer_v2");
  const footerFlagServer = useFlagAsync("footer_v2");

  return (
    <footer>
      {footerFlag.enabled ? <p>New Footer Text</p> : <p>Old Footer Text</p>}

      {!footerFlagServer.isLoading && footerFlagServer.flag.enabled && (
        <div>
          This feature is waiting for the server response to check if we can
          enabled
        </div>
      )}
    </footer>
  );
};

const Body = () => {
  return (
    <section>
      <Flag name="new_chat">
        <p>BaseStack React Flags SDK</p>
      </Flag>
      <br />
      <Flag
        name="new_chat"
        render={(flag) => (
          <p style={{ color: flag.payload.color }}>
            BaseStack React Flags SDK with Color Payload
          </p>
        )}
      />
      <br />
      <FlagAsync name="new_chat">
        <p>FlagAsync</p>
      </FlagAsync>
      <br />
      <FlagAsync
        name="new_chat"
        render={(flag) => (
          <p style={{ color: flag.payload.color }}>
            FlagAsync with Color Payload
          </p>
        )}
      />
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
