import { CapacitorConfig } from "@capacitor/cli";
import { KeyboardResize, KeyboardStyle } from "@capacitor/keyboard";

const commonPlugins = [
  "@capacitor/app",
  "@capacitor/browser",
  "@capacitor/keyboard",
  "@capacitor/haptics",
  "@capacitor/push-notifications",
  "@capacitor/toast",
];
const androidPlugins: string[] = [];
const iosPlugins = ["capacitor-plugin-safe-area"];

//* ********************************************************************************************* */

const url = "https://dev-miti.dockerfile.site";

const server: CapacitorConfig["server"] = {
  hostname: "localhost",
  androidScheme: "http",
  iosScheme: "http",
  url,
  cleartext: true,
};

const config: CapacitorConfig = {
  appId: "com.gcc.miti",
  appName: "miti",
  bundledWebRuntime: false,
  android: {
    includePlugins: [...commonPlugins, ...androidPlugins],
  },
  ios: {
    includePlugins: [...commonPlugins, ...iosPlugins],
  },
  server,
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true,
    },
  },
};

export default config;
