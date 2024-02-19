import React from "react";
import mixpanel from "mixpanel-browser";

function MixpanelTrackedLink() {
  const id = "id-of-element";
  React.useEffect(() => {
    setTimeout(() => {
      mixpanel.track_links(`#${id}`, "Link Clicked");
    }, 200);
  }, [id]);
  return (
    <>
      <a href="https://google.com" id={id}>
        Tracked Link
      </a>
    </>
  );
}

export default function Home() {
  return (
    <>
      <MixpanelTrackedLink />
      <div style={{ marginTop: 100 }}>
        <a href="no-set-timeout">
          Go to page demonstrating how it breaks without a setTimeout
        </a>
      </div>

      <div style={{ marginTop: 100 }}>
        <a href="no-set-timeout">
          Go to page demonstrating how it breaks without a setTimeout, when
          using refs
        </a>
      </div>
    </>
  );
}
