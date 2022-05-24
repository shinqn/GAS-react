import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
);
