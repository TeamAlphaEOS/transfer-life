import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import "./index.css";
import Form from "./components/Form";
import registerServiceWorker from "./registerServiceWorker";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
