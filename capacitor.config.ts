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
const androidPlugins: string[] = ["@capacitor/status-bar"];
const iosPlugins = ["capacitor-plugin-safe-area"];

//* ********************************************************************************************* */

const url = "https://miti.dockerfile.site";
// const url = "http://192.168.0.107:5173";

const server: CapacitorConfig["server"] = {
  hostname: "localhost",
  androidScheme: "http",
  iosScheme: "http",
  url,
  cleartext: true,
};

const config: CapacitorConfig = {
  appId: "com.gcc.miti",
  appName: "미티",
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
