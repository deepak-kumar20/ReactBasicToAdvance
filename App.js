const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "This is Heading"),
    React.createElement("h2", { id: "heading2" }, "This is Heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "This is Heading"),
    React.createElement("h2", { id: "heading2" }, "This is Heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
