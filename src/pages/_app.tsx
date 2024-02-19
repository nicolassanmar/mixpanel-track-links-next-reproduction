import mixpanel from "mixpanel-browser";
import { type AppType } from "next/dist/shared/lib/utils";
import React from "react";

import "~/styles/globals.css";

const useInitMixpanel = () => {
  React.useEffect(() => {
    mixpanel.init("MOCK-PROJECT-KEY", {
      debug: true,
    });
  }, []);
};

const MyApp: AppType = ({ Component, pageProps }) => {
  useInitMixpanel();
  return <Component {...pageProps} />;
};

export default MyApp;
