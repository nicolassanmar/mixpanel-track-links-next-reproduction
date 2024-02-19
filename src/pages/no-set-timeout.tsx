import React from "react";
import mixpanel from "mixpanel-browser";

function MixpanelTrackedLink() {
  const id = "id-of-element";
  React.useEffect(() => {
    mixpanel.track_links(`#${id}`, "Link Clicked");
  }, [id]);
  return (
    <>
      <a href="https://google.com" id={id}>
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
