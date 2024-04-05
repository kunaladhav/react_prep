import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 id="title" key="h1">
    Namaste Kunal
  </h1>
);

const Title2 = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
// React Components

const HeaderComponent = () => {
  return (
    <div>
      {title} /* React element */
      {Title2()} // React Component
      <Title2 />
      <title />
      <h1>Namaste React Functional Component</h1>
      <h2>This is a H2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
