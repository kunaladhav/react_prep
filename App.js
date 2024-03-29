import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 1 for parcel"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
