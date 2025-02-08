import { ServerFlagsSDK } from "@/libs/feature-flags/server";

export default async function Page() {
  const flagsClient = ServerFlagsSDK.getInstance();
  const data = await flagsClient.getAllFlags();

  return (
    <div>
      <h3>All the available flags in server component</h3>
      <ul>
        {data.flags.map((flag, index) => {
          return (
            <li key={index}>{`Slug: ${flag.slug} Enabled: ${flag.enabled}`}</li>
          );
        })}
      </ul>
    </div>
  );
}
