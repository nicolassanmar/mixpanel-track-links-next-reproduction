import React from "react";
import mixpanel from "mixpanel-browser";

function MixpanelTrackedLink() {
  const ref = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    if (!ref.current) return;
    mixpanel.track_links(ref.current, "Link Clicked");
  }, [ref]);
  return (
    <>
      <a href="https://google.com" ref={ref}>
        Link
      </a>
    </>
  );
}

export default function Home() {
  return (
    <>
      <MixpanelTrackedLink />
    </>
  );
}
