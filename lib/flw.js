import Flutterwave from "flutterwave-node-v3";
const config = useRuntimeConfig();

export const flw = new Flutterwave(
  "FLWPUBK_TEST-45de2e1953c7f93f94ae880119d7e3fb-X",
  config.flw_secret
);
