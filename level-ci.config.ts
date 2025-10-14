import type { Config } from "@level-ci/cli";

export default {
  organization: "level-access-5628557662360117-userway-org-rjtxk",
  project: "level-ci-demo-github",
  token: process.env.LEVEL_CI_TOKEN,
  reportPaths: ["./level-ci-reports"],
} satisfies Config;
