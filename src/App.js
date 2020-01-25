const Dinosaur = ({ name, description, preference }) => {
  return React.createElement(
    "div",
    [],
    [
      React.createElement("h1", [], name),
      React.createElement("h2", [], description),
      React.createElement("h3", [], preference)
    ]
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Dinosaur, {
      name: "TeaRex",
      description: "red",
      preference: "who likes tea"
    }),
    React.createElement(Dinosaur, {
      name: "TeaRex",
      description: "red",
      preference: "who likes tea"
    }),
    React.createElement(Dinosaur, {
      name: "TeaRex",
      description: "red",
      preference: "who likes tea"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
