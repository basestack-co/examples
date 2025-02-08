import { FlagsSDK, SDKConfig } from "@basestack/flags-js";
 
export class ServerFlagsSDK {
  private static instance: FlagsSDK;
  private static config: SDKConfig = {
    baseURL: process.env.NEXT_PUBLIC_FEATURE_FLAGS_BASE_URL,
    projectKey: process.env.NEXT_PUBLIC_FEATURE_FLAGS_PROJECT_KEY!,
    environmentKey: process.env.NEXT_PUBLIC_FEATURE_FLAGS_ENVIRONMENT_KEY!,
    // This is an example of how to use environment variables in Vite.js
    // environmentKey: import.meta.env.VITE_FEATURE_FLAGS_ENVIRONMENT_KEY!,
  };
 
  public static getInstance(): FlagsSDK {
    if (!ServerFlagsSDK.instance) {
      ServerFlagsSDK.instance = new FlagsSDK(ServerFlagsSDK.config);
    }
    return ServerFlagsSDK.instance;
  }
}