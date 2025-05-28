import React, { lazy, Suspense, useState } from "react";
const LazyAboutComp = lazy(() => customDelay(import("./LazyLoadingTestAbout")));
const About = () => {
  const [markdown, setMarkdown] = useState("Testing lazy loading!");
  const [preview, setPreview] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ padding: "10px", margin: "10px", width: "300px" }}
      />
      <div style={{ display: "flex", padding: "10px" }}>
        <label style={{ fontSize: "14px", padding: "10px" }}>
          Show preview
        </label>
        <input
          type="checkbox"
          value={preview}
          onChange={(e) => setPreview(e.target.checked)}
        />
      </div>
      {preview && (
        <Suspense fallback={<p>Loading...</p>}>
          <LazyAboutComp markdown={markdown} />
        </Suspense>
      )}
    </div>
  );
};

export default About;

const customDelay = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => promise);
};
