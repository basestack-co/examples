import { ServerFlagsSDK } from "@/libs/feature-flags/server";

// Check it out at http://localhost:3000/api/count

export async function GET() {
  const flagsClient = ServerFlagsSDK.getInstance();

  const flag = await flagsClient.getFlag("count");
  const data = await flagsClient.getAllFlags();

  return Response.json({ data, flag });
}
