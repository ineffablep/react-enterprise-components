import React from "react";
import uuid from "uuid";
import { Helmet } from "react-helmet";
import RenderJson from "../renderJson";

var RenderPage = function RenderPage(_ref) {
  var json = _ref.json,
      text = _ref.text,
      title = _ref.title,
      links = _ref.links,
      metas = _ref.metas;

  return React.createElement(
    "div",
    { className: "w3-row w3-padding-top" },
    React.createElement(
      Helmet,
      null,
      title && React.createElement(
        "title",
        null,
        title
      ),
      metas && metas.map(function (_) {
        return React.createElement("meta", Object.assign({}, _, { key: uuid.v4() }));
      }),
      links && links.map(function (_) {
        return React.createElement("link", Object.assign({}, _, { key: uuid.v4() }));
      })
    ),
    !json || json.length === 0 ? React.createElement(
      "h2",
      null,
      text
    ) : React.createElement(RenderJson, { json: json })
  );
};

export default RenderPage;