"use server";

import { cookies } from "next/headers";
import { initiativeOverviewFlag } from "./flags";

export type BetaAccessFormState = {
  message: string;
};

const initialState: BetaAccessFormState = {
  message: "",
};

export const betaAccessInitialState = initialState;

export async function requestBetaAccess(
  _prevState: BetaAccessFormState,
  formData: FormData,
): Promise<BetaAccessFormState> {
  const email = formData.get("email")?.toString().trim();

  if (!email) {
    return { message: "Please provide a work email so we can reach you." };
  }

  const initiativeOverview = await initiativeOverviewFlag();

  if (!initiativeOverview) {
    return {
      message: "The new Initiative Overview flag is closed.",
    };
  }

  (await cookies()).set("demo-user-id", email, {
    httpOnly: true,
    path: "/",
  });

  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    message: `Invite request received for ${email}.`,
  };
}
