import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = <h1>I am react element in jsx</h1>
const Heading = () => {
  
  return <>{heading}I am react component in JSX</>;
}

const component = (
  <div>
    <Heading /> <br />I m component
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(component);
