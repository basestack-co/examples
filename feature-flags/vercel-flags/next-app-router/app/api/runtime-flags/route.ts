import { NextResponse } from "next/server";
import { initiativeOverviewFlag } from "../../flags";

export async function GET() {
  const initiativeOverview = await initiativeOverviewFlag();

  return NextResponse.json(
    {
      initiativeOverview,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  );
}
