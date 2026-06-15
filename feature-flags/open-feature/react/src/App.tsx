import { useBooleanFlagValue, useFlag } from "@openfeature/react-sdk";

function App() {
  const { value: isHeaderEnabled, ...details } = useFlag(
    "initiative_overview",
    false,
  );
  const isHeaderEnabledValue = useBooleanFlagValue(
    "initiative_overview",
    false,
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10, margin: 120 }}
    >
      <h2>
        useFlag: initiative_overview: {isHeaderEnabled ? "Enabled" : "Disabled"}
      </h2>
      <pre>{JSON.stringify(details, null, 2)}</pre>
      <br />
      <h2>
        useBooleanFlagValue: initiative_overview:{" "}
        {isHeaderEnabledValue ? "Enabled" : "Disabled"}
      </h2>
    </div>
  );
}

export default App;
