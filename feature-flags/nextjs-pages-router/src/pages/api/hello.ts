import type { NextApiRequest, NextApiResponse } from "next";
import { ServerFlagsSDK } from "@/libs/feature-flags/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const flagsClient = ServerFlagsSDK.getInstance();

  const flag = await flagsClient.getFlag("count");
  const data = await flagsClient.getAllFlags();

  res.status(200).json({ data, flag });
}
