import { Fragment, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const [items, setItems] = useState(null);

  return (
    <Fragment>
      <Header setItems={setItems} />
      <Main items={items} />
    </Fragment>
  );
}

export default App;
