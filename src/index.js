import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function initReactAPP(id, schema, schemaUrl) {
  ReactDOM.render(
    <BrowserRouter>
      <App Schema={schema} SchemaUrl={schemaUrl} />
    </BrowserRouter>,
    document.getElementById(id)
  );
}
initReactAPP('root',null,'/schema.json');